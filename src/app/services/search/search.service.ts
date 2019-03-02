import {Injectable} from '@angular/core';

export interface SearchQueryListener {
  searchServiceKey: string;

  queryUpdated(query: string);
}

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private listeners: { [key: string]: SearchQueryListener };

  constructor() {

  }

  public registerListener(listener: SearchQueryListener) {
    this.listeners[listener.searchServiceKey] = listener;
  }

  public deregisterListener(listener: SearchQueryListener) {
    delete this.listeners[listener.searchServiceKey];
  }

  public notifyListeners(query: string) {
    Object.values(this.listeners)
      .forEach((listener) => listener.queryUpdated(query));
  }
}
