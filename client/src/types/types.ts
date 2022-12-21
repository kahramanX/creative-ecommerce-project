export interface ListName {
  listName: string;
  listIcon?: any | undefined;
}

export interface FooterSectionI {
  sectionTitle: string;
  lists: ListName[];
}

export interface FilteredAccordionI {
  label: string;
}
