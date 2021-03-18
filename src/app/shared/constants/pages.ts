import { PageContent } from '@models/page';

export class PageData {
  public static SEARCH_PAGE: PageContent = {
      name: 'Teclado',
      icon: 'keyboard',
      route: 'teclado',
      title: 'Pokédex Nacional',
      subtitle: 'Búsqueda por número'
  };
  
    public static RECENTS_PAGE = {
      name: 'Recientes',
      icon: 'av_timer',
      route: 'recientes',
      title: 'Vistos recientemente',
      subtitle: 'Tu historial de consultas'
    }

  public static POKEDEX_PAGE = {
    name: 'Lista',
    icon: 'format_list_numbered',
    route: 'pokedex',
    title: 'Pokédex Nacional',
    subtitle: 'Mostrando: '
  };
}
