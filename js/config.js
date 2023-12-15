let respecConfig = {
//  useLogo: true,
//  useLabel: true,
//  license: "eupl",
  shortName: "ori",

  // Zie 'localizationStrings/nl' voor de lijst met toegestane specificatie-types
  specType: "IM",
 
  // Zie 'localizationStrings/nl' voor de lijst met toegestane specificatie-statussen
  specStatus: "DEF",
  publishDate: "2023-12-13",
  publishVersion: "2.0.0",
  
  // Zie 'localizationStrings/nl' voor de lijst met toegestane maturities
  previousMaturity: "WV",
  previousPublishDate: "2023-01-13",
  previousPublishVersion: "1.2.0",

  title: "Open Raads- en Stateninformatie",
  content: {"ch01": "informative", "ch02": "", "mermaid": ""},
  editors:
    [
      {
        name: "Robert Melskens",
        company: "VNG Realisatie",
        companyURL: "https://vng.nl/artikelen/vng-realisatie",
      }
    ],
  authors:
    [
      {
        name: "Johan Boer",
        company: "VNG Realisatie",
        companyURL: "https://vng.nl/artikelen/vng-realisatie",
      },
      {
        name: "Henri Korver",
        company: "VNG Realisatie",
        companyURL: "https://vng.nl/artikelen/vng-realisatie",
      }
    ],
  github: "https://github.com/melsk-r/Respec-test",


  // Create PDF and link to file in header (optional):
  alternateFormats: [
      {
          label: "pdf",
          uri: "cim-ori-2.0.0.pdf",
      },
  ],
};
