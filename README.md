# MedicalWorks

![](https://img.shields.io/badge/minzipped_size-2.9MB-blue)
![](https://img.shields.io/badge/node-v10.14.1-yellow)
![](https://img.shields.io/badge/npm-6.4.1-yellow)
![](https://img.shields.io/badge/webpack-4.38.0-yellow)
![](https://img.shields.io/badge/three.js-r114-green)

**MedicalWorks** is a 3D WebGL-based medical solution that will provide versatile tools that import various kinds of medical files, construct anatomical models from these files, design patient-specific guides, and export the 3D models for CAE analysis or 3D printing.

The figures below show the rendered images after loading the sample models.
<div style="text-align: center;">
<img src="https://sangkunine.github.io/medicalWorks/images/samples/quadWorkspace.jpg" width="98%" style="margin: 1px">
<img src="https://sangkunine.github.io/medicalWorks/images/samples/volumeRendering.jpg" width="50%" style="margin: 1px">
<img src="https://sangkunine.github.io/medicalWorks/images/samples/slicesWorkspace.jpg" width="48%" style="margin: 1px">
<img src="https://sangkunine.github.io/medicalWorks/images/samples/isosurface.jpg" width="50%" style="margin: 1px">
<img src="https://sangkunine.github.io/medicalWorks/images/samples/sketch.jpg" width="49%" style="margin: 1px">
</div>

## Supported file formats
DCM (DIC, DICOM, IMA, DCM without extension), NII, NRRD, MHD, MGH, MGZ

## Website
You can run this application at the website: https://sangkunine.github.io/medicalWorks/.

## Highlighted features
- Workspaces: The following workspaces are currently provided for user-friendly GUI.<br>
	- **Quad workspace**: 3 sectional views (axial, sagittal, coronal) and one 3D perspective view
	- **Slices workspace**: 2D slice views of medical volume are shown in slices workspace
- Three different model representations: Supported are 3D slicer, volume, and isosurface.
	- **Slicer**: slice image interpolated with 2D texture array
	- **Volume**: 3D volume rendering based on ray marching technique
	- **Isosurface**: polygonal mesh extracted from 3D volumetric data using marching cubes technique
- Sketchers: Using the following sketch tools we can measure dimensions and extract statistical information from the measured data.
	- Ruler: measure the distance between two positions
	- Angle: measure the angle between two segments defined by three handle points
	- Rectangle: compute the mean, standard deviation, maximum/minimum, and area from the sketched rectangle
	- Polygon: similar to the rectangle, but the sketched geometry is a polygon
	- Freehand: similar to the rectangle, but the sketched geometry is a free-form curve
	- Annotation: text message which user would like to write down

## Unique Selling Proposition
- You can check the medical image information anytime, anywhere in a web browser.
- There is no installation process and no installation costs. Even non-experts can use it at no cost.

## User interface

- Keyboard<br>
You can see any one of the slice images dynamically by pressing the key **arrow up** and **down** with your mouse cursor over the slice image area of interest. Also you can measure a mean value, standard deviation, geometric area, etc. of the selected area by clicking two points while holding **ctrl** key. To delete the selected area, use the **delete** key with your mouse cursor over the selected area.

- Mouse<br>
The slice image of interest can be enlarged or reduced by double clicking the image.<br>
You can control a camera to take a closer look at the loaded models by:<br>
	- pressing left button & moving mouse for camera rotating (only rotated in 3D view),<br>
	- pressing right button & moving mouse for camera panning,<br>
	- scrolling mouse wheel for camera zooming (in/out).

- Sidebar<br>
There are tabs for each model representation (e.g., slicer, volume, isosurface), and additional sketch tabs. In each model tab, you can change the properties of the model. For example, after hovering the mouse cursor over the property value you want to change, click and drag the mouse up / down (or right / left) to increase / decrease the corresponding value. In addition, you can change properties using the checkboxes or drop-down lists with options provided.

## Future works
- Function to build various workspaces to improve user convenience
- Function to design patient-specific guides
- Function to export the 3D models for CAE analysis or 3D printing
- Function to extract features from a large image dataset with deep learning

## Question or suggestion
Please contact us at <info@nova-graphix.com> for any question or suggestion.

Thank you for reading the above description on **MedicalWorks**, developed by [NovaGraphix, Co.](https://www.nova-graphix.com/) Note that we will continue to add new features and technologies. Anyone can use it for free without any restrictions.