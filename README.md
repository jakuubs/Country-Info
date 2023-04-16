# CountryInfo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.5. The project uses [REST Countries](https://restcountries.com/) to get information about countries. At the start, the application gets all countries' information, but you can search for any country in the search bar at the top of the page.

## Development server

First, run `yarn` or `npm install` to install the project dependencies.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

# Project notes

## Dependency Injection

The project uses Angular's dependency injection. `CountryService` is a service marked with `@Injectable` decorator. The `providedIn: 'root'` property describes, that the service should have one instance of itself in the whole application. The service also uses `@InjectionToken`, which is used to provide another dependency to the service - an array of default fields we want to get from the API.

Angular usually handles the dependency injection by itself - we either add a `providedIn` field in the service decorator, which common values include `root` - one instance of the service in the whole app, 'any' - service injected on the lazy-loaded module level. Additionally, we can provide a dependency in a particular module - the injected service should be then available for all the components, directives and pipes declared in this module. We can also inject a service on a component level - then the service becomes available for all the components and directives used in the component's template.

We can also specify our own `@InjectionToken`, which can be used to represent our own dependencies.

## Directives

The project uses two custom directives:

- `country-card` - used to color the country cards in different colors depending on their region
- `country-info` - used to change some styles on a list which displays additional information about a country

Directives are often used to change the style, view or behavior of the component - that's why it became useful in this case.

## Pipes

The project uses custom pipe `languages` to transform the languages object from our country object to a readable form of a string.

Pipes are often used to transform the values in our template, which became useful in this case.

## Lifecycle hooks

The project uses different lifecycle hooks to show what's happening while our application is working.

- OnInit - fires when a component is initialized
- OnChanges - fires when a component receives a new input
- OnDestroy - fires when a component is destroyed and is no longer in our DOM

- AfterContentInit - fires after a projected content was initialized
- AfterContentChecked - fires after projected content changes were made (eg. input changes) and the content changes are finished

- AfterViewInit - fires after a view of a component and its children were initialized
- AfterViewChecked - fires after a view of a component and its children were checked and all the changes in the view are done