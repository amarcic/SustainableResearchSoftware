//uses PapaParse; wrapps the parser in a promise

export async function CSVparse(CSVfile) {
  return new Promise( (resolve, reject) => {
    Papa.parse( CSVfile, {
      download: true,
      skipEmptyLines: true,
      complete: results => resolve(results),
      error: error => reject(error)
    } )
  });
}
