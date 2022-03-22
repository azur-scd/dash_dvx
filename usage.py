import dash
from dash.dependencies import Input, Output
from dash import html
import dash_dvx as dvx
import json

app = dash.Dash(
    __name__, meta_tags=[{"name": "viewport", "content": "width=device-width"}],
    external_stylesheets=["https://cdn3.devexpress.com/jslib/21.2.5/css/dx.common.css","https://cdn3.devexpress.com/jslib/21.2.5/css/dx.material.blue.light.compact.css"]
)

#DATA
data =  [{
    "Task_ID": 1,
    "Task_Assigned_Employee_ID": 1,
    "Task_Subject": 'Plans 2015',
    "Task_Start_Date": '2015-01-01T00:00:00',
    "Task_Due_Date": '2015-04-01T00:00:00',
    "Task_Status": 'Completed',
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 0,
  }, {
    "Task_ID": 2,
    "Task_Assigned_Employee_ID": 2,
    "Task_Subject": 'Health Insurance',
    "Task_Start_Date": '2015-02-12T00:00:00',
    "Task_Due_Date": '2015-05-30T00:00:00',
    "Task_Status": 'In Progress',
    "Task_Priority": 4,
    "Task_Completion": 75,
    "Task_Parent_ID": 0,
  }, {
    "Task_ID": 3,
    "Task_Assigned_Employee_ID": 4,
    "Task_Subject": 'New Brochures',
    "Task_Start_Date": '2015-02-17T00:00:00',
    "Task_Due_Date": '2015-03-01T00:00:00',
    "Task_Status": 'Completed',
    "Task_Priority": 3,
    "Task_Completion": 100,
    "Task_Parent_ID": 1,
  }, {
    "Task_ID": 4,
    "Task_Assigned_Employee_ID": 31,
    "Task_Subject": 'Training',
    "Task_Start_Date": '2015-03-02T00:00:00',
    "Task_Due_Date": '2015-06-29T00:00:00',
    "Task_Status": 'Completed',
    "Task_Priority": 3,
    "Task_Completion": 100,
    "Task_Parent_ID": 2,
  }, {
    "Task_ID": 5,
    "Task_Assigned_Employee_ID": 5,
    "Task_Subject": 'NDA',
    "Task_Start_Date": '2015-03-12T00:00:00',
    "Task_Due_Date": '2015-05-01T00:00:00',
    "Task_Status": 'In Progress',
    "Task_Priority": 3,
    "Task_Completion": 90,
    "Task_Parent_ID": 1,
  }, {
    "Task_ID": 6,
    "Task_Assigned_Employee_ID": 7,
    "Task_Subject": 'Revenue Projections',
    "Task_Start_Date": '2015-03-24T00:00:00',
    "Task_Due_Date": '2015-04-15T00:00:00',
    "Task_Status": 'Completed',
    "Task_Priority": 3,
    "Task_Completion": 100,
    "Task_Parent_ID": 4,
  }, {
    "Task_ID": 7,
    "Task_Assigned_Employee_ID": 9,
    "Task_Subject": 'TV Recall',
    "Task_Start_Date": '2015-04-18T00:00:00',
    "Task_Due_Date": '2016-02-04T00:00:00',
    "Task_Status": 'In Progress',
    "Task_Priority": 4,
    "Task_Completion": 90,
    "Task_Parent_ID": 4,
  }, {
    "Task_ID": 8,
    "Task_Assigned_Employee_ID": 6,
    "Task_Subject": 'Overtime',
    "Task_Start_Date": '2015-06-10T00:00:00',
    "Task_Due_Date": '2015-06-20T00:00:00',
    "Task_Status": 'Completed',
    "Task_Priority": 2,
    "Task_Completion": 100,
    "Task_Parent_ID": 2,
  }, {
    "Task_ID": 9,
    "Task_Assigned_Employee_ID": 8,
    "Task_Subject": 'Recall and Refund Forms',
    "Task_Start_Date": '2015-06-17T00:00:00',
    "Task_Due_Date": '2016-04-09T00:00:00',
    "Task_Status": 'Completed',
    "Task_Priority": 2,
    "Task_Completion": 100,
    "Task_Parent_ID": 1,
  }, {
    "Task_ID": 10,
    "Task_Assigned_Employee_ID": 10,
    "Task_Subject": 'Shippers',
    "Task_Start_Date": '2015-07-10T00:00:00',
    "Task_Due_Date": '2016-04-11T00:00:00',
    "Task_Status": 'Completed',
    "Task_Priority": 2,
    "Task_Completion": 100,
    "Task_Parent_ID": 7,
  }]

fields = [
    {
      "dataField": 'Product_ID',
      "dataType": 'number'
    }, {
      "dataField": 'Product_Name',
      "dataType": 'string'
    }, {
      "dataField": 'Product_Cost',
      "dataType": 'number'
    }, {
      "dataField": 'Product_Sale_Price',
      "dataType": 'number'
    }, {
      "dataField": 'Product_Retail_Price',
      "dataType": 'number'
    }, {
      "dataField": 'Product_Current_Inventory',
      "dataType": 'number'
    },
  ]
#LAYOUT
app.layout =  html.Div(children=[
        dvx.Grid(
        id="grid", 
        dataSource=data,
        columns = ['Task_ID','Task_Subject', 'Task_Start_Date', 'Task_Status', 'Task_Priority'],
        keyExpr= "Task_ID",
        searchPanelIsEnabled= False, #if you don't want the search bar
        pageSizeSelectorIsEnabled= True, #if you want to have the ability to change in the UI the defalt number of items by page
        allowedPageSizes= [5, 10, 20, 50, 100],
    ),
    html.H4("Selected data for the grid"),
    html.Div(id='output_grid'),
    dvx.List(
        id="list", 
        dataSource=data,
        keyExpr= "Task_ID",
        parentIdExpr= "Task_Parent_ID",
        filterRowIsEnabled= False, #if you don't want the row filter undre the header
        columnChooserIsEnabled= True, #if you want to have the ability to show/hide columns in the UI
        defaultPageSize= 25
    ),
    html.H4("Selected data for the list"),
    html.P("(Only the child nodes of the selected items are returned, change selectionMode to 'all' if you want the parents nodes)"),
    html.Div(id='output_list'),
     dvx.Filterbuilder(
        id="fbuilder", 
        fields=fields
    ),
    html.H4("Selected data for the Filterbuilder"),
    html.Div(id='output_filterbuilder'),
    ])

# CALLBACKS
@app.callback(
    Output('output_grid', 'children'),
    Input('grid', 'selected_rows'),
)
def update_grid(selected_rows):
    return json.dumps(selected_rows)

@app.callback(
    Output('output_list', 'children'),
    Input('list', 'selected_rows'),
)
def update_list(selected_rows):
    return json.dumps(selected_rows)

@app.callback(
    Output('output_filterbuilder', 'children'),
    Input('fbuilder', 'value'),
)
def update_filter(value):
    return json.dumps(value)

if __name__ == '__main__':
    app.run_server(debug=True)
