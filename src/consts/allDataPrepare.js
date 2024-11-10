export const shop_data = (allDataToSend, formattedData) => ({
  PodstawoweInformacje: {
    'Rodzaj strony': allDataToSend['Rodzaj strony'],
    Branża: allDataToSend['Branża'],
    'Ilość produktów': allDataToSend['Ilość produktów'],
    'Ilość zakładek': allDataToSend['Ilość zakładek'],
    'Czy będzie blog?': allDataToSend['Czy będzie blog?'],
    'Ile artykułów ma mieć blog': allDataToSend['Ile artykułów ma mieć blog'],
  },
  FunkcjeSklepu: {
    'Funkcje strony': allDataToSend['Funkcje strony'],
  },
  PlatnosciIDostawa: {
    'Formy płatności': allDataToSend['Formy płatności'],
    'Formy dostawy': allDataToSend['Formy dostawy'],
  },
  InneInformacje: {
    'Czy posiadasz logo': allDataToSend['Czy posiadasz logo'],
    'Czy masz projekt': allDataToSend['Czy masz projekt'],
    'Adresy stron które Ci się podobają': allDataToSend['Adresy stron które Ci się podobają'],
    'Czy posiadasz hosting?': allDataToSend['Czy posiadasz hosting?'],
    'Czy posiadasz domenę?': allDataToSend['Czy posiadasz domenę?'],
  },
  DaneKontaktowe: formattedData,
});

export const website_data = (allDataToSend, formattedData) => ({
  PodstawoweInformacje: {
    'Rodzaj strony': allDataToSend['Rodzaj strony'],
    'Technologia strony': allDataToSend['Technologia strony'],
    'Typ strony': allDataToSend['Strona typu'],
    Branża: allDataToSend['Branża/tematyka'],
    'Ilość zakładek': allDataToSend['Ilość zakładek'],
    'Czy będzie blog?': allDataToSend['Czy będzie blog?'],
    'Ile artykułów ma mieć blog': allDataToSend['Ile artykułów ma mieć blog'],
  },
  FunkcjeStrony: {
    'Funkcje strony': allDataToSend['Funkcje strony'],
  },
  InneInformacje: {
    'Czy posiadasz logo': allDataToSend['Czy posiadasz logo'],
    'Czy masz projekt': allDataToSend['Czy masz projekt'],
    'Adresy stron które Ci się podobają': allDataToSend['Adresy stron które Ci się podobają'],
    'Czy posiadasz hosting?': allDataToSend['Czy posiadasz hosting?'],
    'Czy posiadasz domenę?': allDataToSend['Czy posiadasz domenę?'],
  },
  DaneKontaktowe: formattedData,
});

export const lms_data = (allDataToSend, formattedData) => ({
  PodstawoweInformacje: {
    'Rodzaj strony': allDataToSend['Rodzaj strony'],
    'Typ szkoły': allDataToSend['Typ szkoły'],
    'Ilość kursów': allDataToSend['Ilość kursów'],
    'Rodzaje materiałów': allDataToSend['Rodzaje materiałów'],
    'Ilość zakładek': allDataToSend['Ilość zakładek'],
    'Czy będzie blog?': allDataToSend['Czy będzie blog?'],
    'Ile artykułów ma mieć blog': allDataToSend['Ile artykułów ma mieć blog'],
  },
  FunkcjeStrony: {
    'Funkcje strony': allDataToSend['Funkcje strony'],
  },
  InneInformacje: {
    'Czy posiadasz logo': allDataToSend['Czy posiadasz logo'],
    'Czy masz projekt': allDataToSend['Czy masz projekt'],
    'Adresy stron które Ci się podobają': allDataToSend['Adresy stron które Ci się podobają'],
    'Czy posiadasz hosting?': allDataToSend['Czy posiadasz hosting?'],
    'Czy posiadasz domenę?': allDataToSend['Czy posiadasz domenę?'],
  },
  DaneKontaktowe: formattedData,
});
