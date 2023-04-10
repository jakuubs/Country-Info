export interface Country {
  name: CountryName;
  tld?: string[];
  cca2?: string;
  ccn3?: string;
  cca3?: string;
  cioc?: string;
  independent?: boolean;
  status?: string;
  unMember?: boolean;
  currencies?: Currency;
  idd?: IDD;
  capital?: string[];
  altSpellings?: string[];
  region?: string;
  subregion?: string;
  languages?: Language;
  translations?: Translation;
  latlng?: number[];
  landlocked?: boolean;
  borders?: string[];
  area?: number;
  demonyms?: Demonym;
  flag?: string;
  maps?: Maps;
  population?: number;
  gini?: Gini;
  fifa?: string;
  car?: Car;
  timezones?: string[];
  continents?: string[];
  flags?: Flags;
  coatOfArms?: CoatOfArms;
  startOfWeek?: string;
  capitalInfo?: CapitalInfo;
  postalCode?: PostalCode;
}

export interface CountryName {
    common: string;
    official: string;
    nativeName: CountryNativeName;
};

export interface CountryNativeName {
    [key: string]: {
        official: string;
        common: string;
    }
}

export interface Currency {
    [ currencyKey: string]: {
        name: string;
        symbol: string;
    }
}

export interface IDD {
    root: string;
    suffixes: string[];
}

export interface Language {
    [key: string]: string;
}

export interface Translation {
    [key: string]: {
        official: string;
        common: string;
    }
}

export interface Demonym {
    [key: string]: {
        f: string;
        m: string;
    }
}

export interface Maps {
    googleMaps?: string;
    openStreetMaps?: string;
}

export interface Gini {
    [key: string]: string;
}

export interface Car {
    signs: string[];
    side: string;
}

export interface Flags {
    png: string;
    svg: string;
    alt?: string;
}

export interface CoatOfArms {
    png: string;
    scg: string;
}

export interface CapitalInfo {
    latlng: number[];
}

export interface PostalCode {
    format: string;
    regex: string;
}