% Auto-generated: do not edit by hand
\name{''Grid}

\alias{''Grid}

\title{Grid component}

\description{

}

\usage{
''Grid(id=NULL, allowedPageSizes=NULL, columnChooserIsEnabled=NULL,
columns=NULL, dataSource=NULL, defaultPageSize=NULL,
exportIsEnabled=NULL, filterRowIsEnabled=NULL,
headerFilterIsEnabled=NULL, keyExpr=NULL,
pageSizeSelectorIsEnabled=NULL, searchPanelIsEnabled=NULL,
selected_rows=NULL, selectionMode=NULL, sortingMode=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{allowedPageSizes}{Unnamed list. Array of possible page size numbers}

\item{columnChooserIsEnabled}{Logical. Enables dataGrid column chooser widget (true|false).}

\item{columns}{Unnamed list. An array of columns config.
Obligatory fields are : dataField (same as the dataSource array key), caption (the displayed column label)
Optionally fields are : width (number|auto), dataType (date|)
Ex : [{}]}

\item{dataSource}{Unnamed list. An key,value array of data to be displayed in the datagrid}

\item{defaultPageSize}{Numeric. The number of items by page.}

\item{exportIsEnabled}{Logical. enable dataGrid export to Excel (true|false).}

\item{filterRowIsEnabled}{Logical. Displays a filter search line under each column's label in teh datagrid (true|false).}

\item{headerFilterIsEnabled}{Logical. Displays a filter search icon beside to the coumn label (true|false).}

\item{keyExpr}{Character. The dataField to be used as index|key.}

\item{pageSizeSelectorIsEnabled}{Logical. Enables de pages size selector (to choose the numbe rof displayed items by page)}

\item{searchPanelIsEnabled}{Logical. Displays the search panel above the datagrid (true|false).}

\item{selected_rows}{Unnamed list. Array of selected items.}

\item{selectionMode}{Character. Activate the feauture of row's selection (none|single|multiple).}

\item{sortingMode}{Character. The type of sorting data (multiple|single).}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

