const path 			= require('path');
const fs 				= require('fs');
const writeFile = require('write');

const ENCODING 	= 'utf8';
const SRC_EXT 	= '.json';
const DST_EXT 	= '.abi.ts';
const PREFIX 		= 'let abi=';
const SUFFIX 		= '; export default abi;';

const SRC_DIR		= './build/contracts/';
const SRC_EXC		= ['ConvertLib.json', 'Migrations.json'];
const DST_DIR		= './src/app/web3/contracts/';

let jsonTsify = (srcFile, dstDir) => {
	if (path.extname(srcFile) !== SRC_EXT) {
		console.error('Error: Only ' + SRC_EXT + ' files accepted');
		return;
	}

	let fileName = path.basename(srcFile, path.extname(srcFile)) + DST_EXT;
	let dstFile = path.join(dstDir, fileName);

	fs.readFile(srcFile, ENCODING, (err, data) => {
	  if (err) throw err;

	  let contents = PREFIX + data + SUFFIX;
		writeFile(dstFile, contents, (err) => {
		  if (err) console.log(err);
		});
	});
};

let notExcluded = (name) => {
	return !SRC_EXC.includes(name);
}

fs.readdir(SRC_DIR, (err, files) => {
	if (err) throw err;
  files.filter(notExcluded).forEach(file => {
    jsonTsify(path.join(SRC_DIR, file), DST_DIR);
  });
});