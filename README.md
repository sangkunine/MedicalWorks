# MedicalWorks

![](https://img.shields.io/badge/minzipped_size-2.8MB-blue)
![](https://img.shields.io/badge/node-v10.14.1-yellow)
![](https://img.shields.io/badge/npm-6.4.1-yellow)
![](https://img.shields.io/badge/webpack-4.38.0-yellow)
![](https://img.shields.io/badge/three.js-r106-green)

**MedicalWorks** is a 3D WebGL-based medical application that will provide versatile tools that import various kinds of medical files, construct anatomical models from these files, design patient-specific guides, and export the 3D models for CAE analysis or 3D printing.

The figures below show the rendered images after loading the sample models.
<div style="text-align: center;">
<img src="https://sangkunine.github.io/medicalWorks/images/samples/slices.png" width="24%" height="200px" style="margin: 1px">
<img src="https://sangkunine.github.io/medicalWorks/images/samples/volume.png" width="20%" height="200px" style="margin: 1px">
<img src="https://sangkunine.github.io/medicalWorks/images/samples/volume2.png" width="20%" height="200px" style="margin: 1px">
<img src="https://sangkunine.github.io/medicalWorks/images/samples/widget.png" width="24%" height="200px" style="margin: 1px">
</div>

## Supported file formats
DCM (DIC, DICOM, IMA, DCM without extension),
NII,
NRRD,
MHD,
MGH,
MGZ

## Website
You can run one of the workspaces provided by this application at the website: https://sangkunine.github.io/medicalWorks/.

## User interface

- Keyboard<br>
You can see any one of the slice images dynamically by pressing the key **arrow up** and **down** with your mouse cursor over the slice image area of interest.<br>
Also you can measure a mean value, standard deviation, geometric area, etc. of the selected area by clicking two points while holding **ctrl** key. To delete the selected area, use the **delete** key with your mouse cursor over the selected area.

- Mouse<br>
The slice image of interest can be enlarged or reduced by double clicking the image.<br>
You can control a camera to take a closer look at the loaded models by:<br>
	- pressing left button & moving mouse for camera rotating (only rotated in 3D view),<br>
	- pressing right button & moving mouse for camera panning,<br>
	- scrolling mouse wheel for camera zooming (in/out).

## Future works
- Function to measure the distance between two clicked points, the angle between three point, the position of one point, and so on.
- Function to create polygonal mesh of an isosurface from 3D volumetric data using marching cubes technique.
- Function to export compact STL files for 3D printing.
- Function to build various workspaces to improve user convenience.

## Question or suggestion
Please contact us at <info@nova-graphix.com> for any question or suggestion.

Thank you for reading the above description on **MedicalWorks**, developed by [NovaGraphix, Co.](https://www.nova-graphix.com/) Note that we will continue to add new features and technologies. Anyone can use it for free without any restrictions.