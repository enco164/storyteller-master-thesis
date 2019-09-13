import {SortDirection} from "@angular/material";

export class CriteriaParams {
  filter = '';
  sortBy = '';
  sortDirection: SortDirection = 'asc';
  pageNumber = 0;
  pageSize = 10;
}
