import fs from "node:fs";
import path from "node:path";

const sourcePath = process.argv[2];
if (!sourcePath) throw new Error("Pass the Natural Earth GeoJSON source path.");

const included = new Set([
  "India", "Sri Lanka", "Bangladesh", "Nepal", "Bhutan", "Myanmar",
  "Thailand", "Laos", "Cambodia", "Vietnam", "Malaysia", "Singapore",
  "Brunei", "Indonesia", "East Timor", "Philippines", "China", "Taiwan",
  "Mongolia", "North Korea", "South Korea", "Japan", "Australia",
  "New Zealand", "Papua New Guinea", "Palau", "Federated States of Micronesia",
  "Marshall Islands", "Nauru", "Kiribati", "Tuvalu", "Solomon Islands",
  "Vanuatu", "New Caledonia", "Fiji", "Tonga", "Samoa", "American Samoa",
]);

const width = 1400;
const height = 760;
const west = 55;
const east = 190;
const north = 55;
const south = -50;
const project = ([rawLongitude, latitude]) => {
  const longitude = rawLongitude < 0 ? rawLongitude + 360 : rawLongitude;
  const x = ((longitude - west) / (east - west)) * width;
  const y = ((north - latitude) / (north - south)) * height;
  return `${x.toFixed(1)} ${y.toFixed(1)}`;
};

const ringToPath = (ring) =>
  ring.map((point, index) => `${index === 0 ? "M" : "L"}${project(point)}`).join(" ") + " Z";

const geometryToPath = (geometry) => {
  const polygons = geometry.type === "Polygon" ? [geometry.coordinates] : geometry.coordinates;
  return polygons.flatMap((polygon) => polygon.map(ringToPath)).join(" ");
};

const geojson = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
const paths = geojson.features
  .filter((feature) => included.has(feature.properties.ADMIN))
  .map((feature) => {
    const name = feature.properties.ADMIN;
    return `  <path d="${geometryToPath(feature.geometry)}"><title>${name}</title></path>`;
  })
  .join("\n");

const globeSize = 1000;
const globeRadius = 478;
const centerLongitude = 120 * Math.PI / 180;
const centerLatitude = -5 * Math.PI / 180;
const projectGlobe = ([rawLongitude, rawLatitude]) => {
  const normalizedLongitude = rawLongitude < 0 ? rawLongitude + 360 : rawLongitude;
  let longitudeDelta = normalizedLongitude * Math.PI / 180 - centerLongitude;
  if (longitudeDelta > Math.PI) longitudeDelta -= Math.PI * 2;
  if (longitudeDelta < -Math.PI) longitudeDelta += Math.PI * 2;
  const latitude = rawLatitude * Math.PI / 180;
  const visibility =
    Math.sin(centerLatitude) * Math.sin(latitude) +
    Math.cos(centerLatitude) * Math.cos(latitude) * Math.cos(longitudeDelta);
  if (visibility < 0) return null;
  const x = globeSize / 2 + globeRadius * Math.cos(latitude) * Math.sin(longitudeDelta);
  const y = globeSize / 2 - globeRadius * (
    Math.cos(centerLatitude) * Math.sin(latitude) -
    Math.sin(centerLatitude) * Math.cos(latitude) * Math.cos(longitudeDelta)
  );
  return `${x.toFixed(1)} ${y.toFixed(1)}`;
};

const ringToGlobePath = (ring) => {
  const projected = ring.map(projectGlobe);
  if (projected.some((point) => point === null)) return "";
  return projected.map((point, index) => `${index === 0 ? "M" : "L"}${point}`).join(" ") + " Z";
};

const globePaths = geojson.features
  .filter((feature) => included.has(feature.properties.ADMIN))
  .map((feature) => {
    const polygons = feature.geometry.type === "Polygon"
      ? [feature.geometry.coordinates]
      : feature.geometry.coordinates;
    const pathData = polygons.flatMap((polygon) => polygon.map(ringToGlobePath)).filter(Boolean).join(" ");
    return pathData ? `  <path d="${pathData}"><title>${feature.properties.ADMIN}</title></path>` : "";
  })
  .filter(Boolean)
  .join("\n");

const createSvg = ({ fill, fillOpacity, stroke, strokeOpacity }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" fill="none">
  <!-- Natural Earth 1:50m admin-0 geography, public domain. -->
  <g fill="${fill}" fill-opacity="${fillOpacity}" stroke="${stroke}" stroke-opacity="${strokeOpacity}" stroke-width="0.72" stroke-linejoin="round" vector-effect="non-scaling-stroke">
${paths}
  </g>
</svg>
`;

const variants = [
  {
    file: "indo-pacific-outline.svg",
    colors: { fill: "#DCEEFF", fillOpacity: "0.025", stroke: "#DCEEFF", strokeOpacity: "0.58" },
  },
  {
    file: "indo-pacific-outline-light.svg",
    colors: { fill: "#DCE8E5", fillOpacity: "0.52", stroke: "#375570", strokeOpacity: "0.64" },
  },
];

const outputDirectory = path.resolve("public/maps");
fs.mkdirSync(outputDirectory, { recursive: true });
for (const variant of variants) {
  const svg = createSvg(variant.colors);
  const outputPath = path.join(outputDirectory, variant.file);
  fs.writeFileSync(outputPath, svg);
  console.log(`${outputPath} (${Buffer.byteLength(svg)} bytes)`);
}

const globeSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${globeSize} ${globeSize}" fill="none">
  <!-- Natural Earth 1:50m geography in an Indo-Pacific orthographic projection. -->
  <g fill="#1685B8" fill-opacity="0.2" stroke="#DDF5FF" stroke-opacity="0.82" stroke-width="0.82" stroke-linejoin="round" vector-effect="non-scaling-stroke">
${globePaths}
  </g>
</svg>
`;
const globeOutputPath = path.join(outputDirectory, "indo-pacific-globe.svg");
fs.writeFileSync(globeOutputPath, globeSvg);
console.log(`${globeOutputPath} (${Buffer.byteLength(globeSvg)} bytes)`);
