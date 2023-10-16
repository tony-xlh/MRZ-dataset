# MRZ-dataset

An image dataset of documents with MRZ 

The dataset contains 36 images from the Internet. The MRZ code is annotated.

The images are put into 2 categories. One is synthetic images from alexpsd.ru. The other is real world images.

The data are stored in the data.json file.

A snippet of the json file:

```json
{
    "images": [
        {
            "type": "realworld",
            "filename": "1599px-JTK_Stearne_Passport-563x400.jpg",
            "mrz": "P<CANSTEARNE<<JOHN<TIMOTHY<KELLY<<<<<<<<<<<<\\nGA302922<0CAN5807020M2409043<<<<<<<<<<<<<<02",
            "source": "http://canadapassporthelp.ca/2009/11/24/assistance-with-canadian-passport-photos/",
            "url": "https://canadapassporthelp.ca/wp-content/uploads/2009/11/1599px-JTK_Stearne_Passport-563x400.jpg"
        }
    ]
}
```
