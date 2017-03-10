import database from '../../database';

export function fixArticles(){

  const ref = database.ref('article');
  ref.remove();

}