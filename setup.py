import json
import os
from setuptools import setup


with open('package.json') as f:
    package = json.load(f)
with open('pypi_README.md', encoding='utf-8') as f:
    long_description = f.read()
package_name = package["name"].replace(" ", "_").replace("-", "_")

setup(
    name=package_name,
    version=package["version"],
    packages=[package_name],
    description=package.get('description', package_name),
    long_description = long_description,
    long_description_content_type="text/markdown",
    url='https://github.com/azur-scd/dash_dvx',
    author='Géraldine Geoffroy',
    author_email='geraldine.geoffroy@univ-cotedazur.fr',
    include_package_data=True,
    license=package['license'],
    install_requires=[],
    classifiers = [
        'Framework :: Dash',
    ],    
)
