"use strict";

const fs = require("fs"),
	path = require("path");

copyFile("src/api-filter-parser.d.ts", "index.d.ts");
copyFile("README.md");
copyFile(".gitignore");
copyFile(".npmrc");

function copyFile(source, target) {
	if (target == null) {
		target = source;
	}
	source = path.resolve(path.join(__dirname, "..", source));
	target = path.resolve(path.join(__dirname, "../dist", target));

	try {
		fs.accessSync(source);
		fs.writeFileSync(target, fs.readFileSync(source));
	} catch(e) {}
}
