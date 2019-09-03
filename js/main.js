
 //Build File with Text
const fs = require('fs');

const data = (Buffer.from(''));
fs.writeFile('hola.txt', 'Hola perrote, como estas?', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
 
//Read file created before
const fs = require('fs');
fs.readFile('hola.txt', 'utf-8', (err, data) => {
  if (err){
		console.log('Archivo no encontrado')
		return
	}
  console.log('Datos:',data);
}); 

//add String in the current file hola.txt
const fs = require('fs');
fs.appendFile('hola.txt', '\nBien, Gracias', (err) => {
  if (err) throw err;
  console.log('El Texto "Bien, Gracias" Fué añadido al archivo con exito!');
});

//function to delete a specific file in this case hola.txt
const fs = require('fs');
fs.unlink('hola.txt', (err) => {
  if (err) throw err;
  console.log('js/hola.txt ha sido eliminada');
});

//function to copy file in other file
const fs = require('fs');
fs.copyFile('hola.txt', 'newFile.txt', (err) => {
  if (err) throw err;
  console.log('hola.txt fué copiado a newFile.txt');
});

const fs = require('fs');
fs.mkdir('/home/carlos/Escritorio/ActNode/newFolder', (err) => {
	console.log('Folder created!')
  if (err) throw err;
});