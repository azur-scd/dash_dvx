% Auto-generated: do not edit by hand
\name{''List}

\alias{''List}

\title{List component}

\description{

}

\usage{
''List(id=NULL, allowedPageSizes=NULL, autoExpandAll=NULL,
columnChooserIsEnabled=NULL, columns=NULL, dataSource=NULL,
defaultPageSize=NULL, defaultSelectedRowKeys=NULL,
default_selected_row_keys=NULL, filterRowIsEnabled=NULL,
headerFilterIsEnabled=NULL, keyExpr=NULL,
pageSizeSelectorIsEnabled=NULL, pagingIsEnabled=NULL,
parentIdExpr=NULL, searchPanelIsEnabled=NULL,
selected_rows=NULL, selectionIsRecursive=NULL,
selectionMode=NULL, sortingMode=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{allowedPageSizes}{Unnamed list. Array of possible page size numbers}

\item{autoExpandAll}{Logical. Enables auto expand the tree}

\item{columnChooserIsEnabled}{Logical. Enables dataGrid column chooser widget (true|false).}

\item{columns}{Unnamed list. An array of columns config.
Obligatory fields are : dataField (same as the dataSource array key), caption (the displayed column label)
Optionally fields are : width (number|auto), dataType (date|)
Ex : [{}]}

\item{dataSource}{Unnamed list. An key,value array of data to be displayed in the datagrid}

\item{defaultPageSize}{Numeric. The number of items by page.}

\item{defaultSelectedRowKeys}{Unnamed list. The array of default selected row keys id.}

\item{default_selected_row_keys}{Unnamed list. Array of selected items in UI.}

\item{filterRowIsEnabled}{Logical. Displays a filter search line under each column's label in teh datagrid (true|false).}

\item{headerFilterIsEnabled}{Logical. Displays a filter search icon beside to the coumn label (true|false).}

\item{keyExpr}{Character. The dataField to be used as index|key.}

\item{pageSizeSelectorIsEnabled}{Logical. Enables de pages size selector (to choose the numbe rof displayed items by page)}

\item{pagingIsEnabled}{Logical. Enables the paging of results}

\item{parentIdExpr}{Character. The dataField to be used as the key to loop on to display the unflattes list.}

\item{searchPanelIsEnabled}{Logical. Displays the search panel above the datagrid (true|false).}

\item{selected_rows}{Unnamed list. Array of selected items.}

\item{selectionIsRecursive}{Logical. Recursively selects sub-items and parent itemsof a selected irow (true|false)}

\item{selectionMode}{Character. Configure the perimetre of itme selection (single|all|leavesOnly).}

\item{sortingMode}{Character. The type of sorting data (multiple|single).}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

