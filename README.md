# dash_dvx

![forthebadge](./made-with-dash-component-boilerplate.svg)

dash_dvx is a Dash component library.

This module is as simple and basic wrapper for the DevExtreme UI components library. Complete DevExtreme demos are available here [https://js.devexpress.com/Demos/WidgetsGallery/](https://js.devexpress.com/Demos/WidgetsGallery/)

This dash component was quickly developed for a need in another project, so for the moment the component is quite basic and integrates only three kinds of devextreme UI components : the Data Grid, the Tree List and the Filter Builder

Some of the most important DevExtreme features are integrated by default (paging, filtering, export, selection...), see below the details of the Grid and List dash component configuration.


## Install

```
pip install dash-dvx
```

## Usage

### Import the dash component

```
import dash_dvx as dvx

```
### Styling the component

You can add the DevExtreme CSS and themes by declaring the CDN hosted resources in the external_stylesheets init keyword.

```
external_stylesheets=["https://cdn3.devexpress.com/jslib/21.2.5/css/dx.common.css","https://cdn3.devexpress.com/jslib/21.2.5/css/dx.material.orange.dark.compact.css"]

app = dash.Dash(
    __name__, meta_tags=[{"name": "viewport", "content": "width=device-width"}],
    external_stylesheets=extrenal_stylesheets
)
```

### Config (list of component attributes for the Grid and List)


| Syntax         | Used by component | Description    | Required/Enabled by default     | Possible values | Default values
| :---           | :---              |    :----:      |          ---: |  :----:      |          ---: |
| id         |  Grid/List                | (string) the id selector of the html output          |    |
| dataSource      | Grid/List                  | (list of dicts) the data           | Required      |
| columns      | Grid                  | (list of dicts) a list of the dictionary keys you want to be displayed           | Required     |
| keyExpr      | Grid/List                  | (string) the unique key values to access data items           | Required      |
| parentIdExpr | List | (string) the keys to loop on to create the nested list | Required |
| defaultPageSize      | Grid                  | (int) number of items displayed by page           | Enabled by default      |  | 10
| pagingIsEnabled      | List                  | (bool) splits records into multiple pages           | Enabled by default      | True/False  | True
| defaultPageSize      | List                  | (int) number of items displayed by page           | Required if pagingIsEnabled is True/Enabled by default      |  | 10
| pageSizeSelectorIsEnabled      | Grid/List                  | (bool) enables a dropdown widget to choose the PageSize           | Not enabled by default     | True/False | False
| allowedPageSizes      | Grid/List                  | (list) defines the possible page size number           | Required if pageSizeSelectorIsEnabled is True     | [5, 10, 20, 50]
| sortingMode  | Grid/List | (string) specify the sort mode | Enabled by default  | "single"/"multiple" | "multiple"
| searchPanelIsEnabled | Grid/List | (bool) displays a search bar (on all datafields) above the datagrid | Enabled by default | True/False | True
| headerFilterIsEnabled | Grid/List | (bool) enables a filter icon in any column header | Enabled by default | True/False | True
| filterRowIsEnabled | Grid/List | (bool) displays a filter row located under the column headers | Enabled by default | True/False | True
| columnChooserIsEnabled | Grid/List | (bool) enables a widget to show and hide columns | Not enabled by default | True/False | False
| exportIsEnabled | Grid | (bool) enables an Excel export button above the DataGrid | Enabled by default | True/False | True
| selectionMode | Grid | (string) enables the feature of selecting one single row or multiple rows using checkboxes  | Enabled by default | "single"/"multiple"/"none" | "multiple"
| selectionIsRecursive | List | (bool) enables the feature of recursively selecting rows with their nested rows (parents and childs) | Enabled by default | True/False | True
| selectionMode | List | (string) enables the feature of selecting one single row or multiple nested rows using checkboxes. If selectionIsRecursive is True, possible values are "all" to select all hierarchical ascnedants and descendants, or "leavesOnly" to select only child rows | Enabled by default | "single"/"all"/"leavesOnly" | "leavesOnly"

To get the returned selected data in a dash app, you must call the property "selected_rows" associated to the html grid or list id (see below the examples or the usage.py file)

### See in action

1. git clone
2. Prepare the virtualenv and install requirements.txt
3. python usage.py


### Grid Simple example

```
import dash
from dash import html
import dash_dvx as dvx
import json

app = dash.Dash(
    __name__, meta_tags=[{"name": "viewport", "content": "width=device-width"}],
    external_stylesheets=["https://cdn3.devexpress.com/jslib/21.2.5/css/dx.common.css","https://cdn3.devexpress.com/jslib/21.2.5/css/dx.material.blue.light.compact.css"]
)

#DATA
data = [{
    "ID": 1,
    "CompanyName": 'Super Mart of the West',
    "Address": '702 SW 8th Street',
    "City": 'Bentonville',
    "State": 'Arkansas',
    "Zipcode": 72716,
    "Phone": '(800) 555-2797',
    "Fax": '(800) 555-2171',
   " Website": 'http://www.nowebsitesupermart.com',
  }, {
    "ID": 2,
    "CompanyName": 'Electronics Depot',
    "Address": '2455 Paces Ferry Road NW',
    "City": 'Atlanta',
    "State": 'Georgia',
    "Zipcode": 30339,
    "Phone": '(800) 595-3232',
    "Fax": '(800) 595-3231',
    "Website": 'http://www.nowebsitedepot.com',
  }, {
    "ID": 3,
    "CompanyName": 'K&S Music',
    "Address": '1000 Nicllet Mall',
    "City": 'Minneapolis',
    "State": 'Minnesota',
    "Zipcode": 55403,
    "Phone": '(612) 304-6073',
    "Fax": '(612) 304-6074',
    "Website": 'http://www.nowebsitemusic.com',
  }]

#LAYOUT
 app.layout =  html.Div(children=[
        dvx.Grid(
        id="grid", 
        dataSource=data,
        columns = ['ID','CompanyName', 'City', 'State', 'Phone', 'Fax'],
        keyExpr= "ID"
    ),
    ])

if __name__ == '__main__':
    app.run_server(debug=True)
```

### Grid example with callback

``` 
app.layout =  html.Div(children=[
        dvx.Grid(
        id="grid", 
        dataSource=data,
        columns = ['ID','CompanyName', 'City', 'State', 'Phone', 'Fax'],
        keyExpr= "ID",
        searchPanelIsEnabled= False, #if you don't want the search bar
        pageSizeSelectorIsEnabled= True, #if you want to have the ability to change in the UI the defalt number of itmes by page
        allowedPageSizes= [5, 10, 20, 50, 100],
    ),
    html.Div(id='output')
    ])

@app.callback(
    Output('output', 'children'),
    Input('grid', 'selected_rows'),
)
def update_output(selected_rows):
    return json.dumps(selected_rows)
```

### List example

```
import dash
from dash import html
import dash_dvx as dvx
import json

app = dash.Dash(
    __name__, meta_tags=[{"name": "viewport", "content": "width=device-width"}],
    external_stylesheets=["https://cdn3.devexpress.com/jslib/21.2.5/css/dx.common.css","https://cdn3.devexpress.com/jslib/21.2.5/css/dx.material.orange.dark.compact.css"]
)

#DATA
data = [{
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
    "Task_Parent_ID": 1,
  }, {
    "Task_ID": 3,
    "Task_Assigned_Employee_ID": 4,
    "Task_Subject": 'New Brochures',
    "Task_Start_Date": '2015-02-17T00:00:00',
    "Task_Due_Date": '2015-03-01T00:00:00',
    "Task_Status": 'Completed',
    "Task_Priority": 3,
    "Task_Completion": 100,
    "Task_Parent_ID": 2,
  }, {
    "Task_ID": 4,
    "Task_Assigned_Employee_ID": 31,
    "Task_Subject": 'Training',
    "Task_Start_Date": '2015-03-02T00:00:00',
    "Task_Due_Date": '2015-06-29T00:00:00',
    "Task_Status": 'Completed',
    "Task_Priority": 3,
    "Task_Completion": 100,
    "Task_Parent_ID": 0,
  }]

#LAYOUT
 app.layout =  html.Div(children=[
       dvx.List(
        id="list", 
        dataSource=data,
        keyExpr= "Task_ID",
        parentIdExpr= "Task_Parent_ID",
        filterRowIsEnabled= False, #if you don't want the row filter undre the header
        columnChooserIsEnabled= True, #if you want to have the ability to show/hide columns in the UI
        defaultPageSize= 25,
        selectionMode="all" # if you want the parents and the childs nodes of the selected item, default config is "leavesOnly" wich returns only the sub-items of the selection
    ),
    html.Div(id='output')
    ])

# CALLBACKS
@app.callback(
    Output('output', 'children'),
    Input('list', 'selected_rows'),
)
def update_list(selected_rows):
    return json.dumps(selected_rows)

if __name__ == '__main__':
    app.run_server(debug=True)
```

### Filter Builder simple example

```
import dash
from dash import html
import dash_dvx as dvx
import json

app = dash.Dash(
    __name__, meta_tags=[{"name": "viewport", "content": "width=device-width"}],
    external_stylesheets=["https://cdn3.devexpress.com/jslib/21.2.5/css/dx.common.css","https://cdn3.devexpress.com/jslib/21.2.5/css/dx.material.orange.dark.compact.css"]
)

#DATA
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
        dvx.Filterbuilder(
        id="fbuilder", 
        fields=fields
    ),
    html.Div(id='output')
    ])

# CALLBACKS
@app.callback(
    Output('output', 'children'),
    Input('fbuilder', 'value'),
)
def update_filter(value):
    return json.dumps(value) # the result of the component strictly follows that of the Filter Builder component of the Devextreme library, example [["Product_Cost", "<", 5000], "and", ["Product_Name", "contains", "tee-shirt"]]

if __name__ == '__main__':
    app.run_server(debug=True)
```

## Development

Get started with:
1. Install Dash and its dependencies: https://dash.plotly.com/installation
2. Run `python usage.py`
3. Visit http://localhost:8050 in your web browser

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)

### Install dependencies

If you have selected install_dependencies during the prompt, you can skip this part.

1. Install npm packages
    ```
    $ npm install
    ```
2. Create a virtual env and activate.
    ```
    $ virtualenv venv
    $ . venv/bin/activate
    ```
    _Note: venv\Scripts\activate for windows_

3. Install python packages required to build components.
    ```
    $ pip install -r requirements.txt
    ```
4. Install the python packages for testing (optional)
    ```
    $ pip install -r tests/requirements.txt
    ```

### Write your component code in `src/lib/components/DashDvx.react.js`.

- The demo app is in `src/demo` and you will import your example component code into your demo app.
- Run the demo code
  - npm run start
  - Open http://localhost:55555
- Test your code in a Python environment:
    1. Build your code
        ```
        $ npm run build
        ```
    2. Run and modify the `usage.py` sample dash app:
        ```
        $ python usage.py
        ```
- Write tests for your component.
    - A sample test is available in `tests/test_usage.py`, it will load `usage.py` and you can then automate interactions with selenium.
    - Run the tests with `$ pytest tests`.
    - The Dash team uses these types of integration tests extensively. Browse the Dash component code on GitHub for more examples of testing (e.g. https://github.com/plotly/dash-core-components)
- Add custom styles to your component by putting your custom CSS files into your distribution folder (`dash_dvx`).
    - Make sure that they are referenced in `MANIFEST.in` so that they get properly included when you're ready to publish your component.
    - Make sure the stylesheets are added to the `_css_dist` dict in `dash_dvx/__init__.py` so dash will serve them automatically when the component suite is requested.
- [Review your code](./review_checklist.md)

### Create a production build and publish:

1. Build your code:
    ```
    $ npm run build
    ```
2. Create a Python distribution
    ```
    $ python setup.py sdist bdist_wheel
    ```
    This will create source and wheel distribution in the generated the `dist/` folder.
    See [PyPA](https://packaging.python.org/guides/distributing-packages-using-setuptools/#packaging-your-project)
    for more information.

    *Note : the version number of the package (dist/dash_dvx-x.x.x-py3-none-any.whl) given by the setup.py file comes from the src/package.json file*

3. Test your tarball by copying it into a new environment and installing it locally:
    ```
    $ pip install dash_dvx-0.0.1.tar.gz
    ```

4. If it works, then you can publish the component to NPM and PyPI:
    1. Publish on PyPI
        ```
        $ twine upload dist/*
        ```
    2. Cleanup the dist folder (optional)
        ```
        $ rm -rf dist
        ```
    3. Publish on NPM (Optional if chosen False in `publish_on_npm`)
        ```
        $ npm publish
        ```
        _Publishing your component to NPM will make the JavaScript bundles available on the unpkg CDN. By default, Dash serves the component library's CSS and JS locally, but if you choose to publish the package to NPM you can set `serve_locally` to `False` and you may see faster load times._

5. Share your component with the community! https://community.plotly.com/c/dash
    1. Publish this repository to GitHub
    2. Tag your GitHub repository with the plotly-dash tag so that it appears here: https://github.com/topics/plotly-dash
    3. Create a post in the Dash community forum: https://community.plotly.com/c/dash



