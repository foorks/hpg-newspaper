import { promises as fs } from "fs";
import parseNewspaperData from "../utils/parseNewspaperData";

describe("HPG Pages", () => {
  test("syntax in md files", async () => {
    const files = await fs.readdir("./text/");
    const mdFileNames = files.filter((filename) => filename.endsWith(".md"));
    const mdFiles = await Promise.all(
      mdFileNames.map((filename) => fs.readFile(`./text/${filename}`, "utf8"))
    );

    mdFiles.forEach((content) => parseNewspaperData(content));
  });
});
