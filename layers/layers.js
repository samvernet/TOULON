var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_EnseignesNationales_1 = new ol.format.GeoJSON();
var features_EnseignesNationales_1 = format_EnseignesNationales_1.readFeatures(json_EnseignesNationales_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EnseignesNationales_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EnseignesNationales_1.addFeatures(features_EnseignesNationales_1);
var lyr_EnseignesNationales_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EnseignesNationales_1, 
                style: style_EnseignesNationales_1,
                popuplayertitle: "Enseignes Nationales",
                interactive: true,
    title: 'Enseignes Nationales<br />\
    <img src="styles/legend/EnseignesNationales_1_0.png" /> Locale<br />\
    <img src="styles/legend/EnseignesNationales_1_1.png" /> Nationale<br />'
        });
var format_EmplacementN1_2 = new ol.format.GeoJSON();
var features_EmplacementN1_2 = format_EmplacementN1_2.readFeatures(json_EmplacementN1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmplacementN1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmplacementN1_2.addFeatures(features_EmplacementN1_2);
var lyr_EmplacementN1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmplacementN1_2, 
                style: style_EmplacementN1_2,
                popuplayertitle: "Emplacement N°1",
                interactive: true,
                title: 'Emplacement N°1'
            });
var format_Locauxvacants_3 = new ol.format.GeoJSON();
var features_Locauxvacants_3 = format_Locauxvacants_3.readFeatures(json_Locauxvacants_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Locauxvacants_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Locauxvacants_3.addFeatures(features_Locauxvacants_3);
var lyr_Locauxvacants_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Locauxvacants_3, 
                style: style_Locauxvacants_3,
                popuplayertitle: "Locaux vacants",
                interactive: true,
    title: 'Locaux vacants<br />\
    <img src="styles/legend/Locauxvacants_3_0.png" /> Locaux en travaux<br />\
    <img src="styles/legend/Locauxvacants_3_1.png" /> Locaux vacants<br />'
        });
var format_ToulonVAD2024_pourcartographietoulon_vad_2024_copier_4 = new ol.format.GeoJSON();
var features_ToulonVAD2024_pourcartographietoulon_vad_2024_copier_4 = format_ToulonVAD2024_pourcartographietoulon_vad_2024_copier_4.readFeatures(json_ToulonVAD2024_pourcartographietoulon_vad_2024_copier_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ToulonVAD2024_pourcartographietoulon_vad_2024_copier_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ToulonVAD2024_pourcartographietoulon_vad_2024_copier_4.addFeatures(features_ToulonVAD2024_pourcartographietoulon_vad_2024_copier_4);
var lyr_ToulonVAD2024_pourcartographietoulon_vad_2024_copier_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ToulonVAD2024_pourcartographietoulon_vad_2024_copier_4, 
                style: style_ToulonVAD2024_pourcartographietoulon_vad_2024_copier_4,
                popuplayertitle: "Toulon VAD 2024_pour cartographie — toulon_vad_2024_ copier",
                interactive: true,
    title: 'Toulon VAD 2024_pour cartographie — toulon_vad_2024_ copier<br />\
    <img src="styles/legend/ToulonVAD2024_pourcartographietoulon_vad_2024_copier_4_0.png" /> 2 - 3<br />\
    <img src="styles/legend/ToulonVAD2024_pourcartographietoulon_vad_2024_copier_4_1.png" /> 5 - 6<br />\
    <img src="styles/legend/ToulonVAD2024_pourcartographietoulon_vad_2024_copier_4_2.png" /> 8 - 9<br />\
    <img src="styles/legend/ToulonVAD2024_pourcartographietoulon_vad_2024_copier_4_3.png" /> 10 - 11<br />\
    <img src="styles/legend/ToulonVAD2024_pourcartographietoulon_vad_2024_copier_4_4.png" /> 12 - 13<br />\
    <img src="styles/legend/ToulonVAD2024_pourcartographietoulon_vad_2024_copier_4_5.png" /> 15 - 16<br />\
    <img src="styles/legend/ToulonVAD2024_pourcartographietoulon_vad_2024_copier_4_6.png" /> 18 - 19<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_EnseignesNationales_1.setVisible(true);lyr_EmplacementN1_2.setVisible(true);lyr_Locauxvacants_3.setVisible(true);lyr_ToulonVAD2024_pourcartographietoulon_vad_2024_copier_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_EnseignesNationales_1,lyr_EmplacementN1_2,lyr_Locauxvacants_3,lyr_ToulonVAD2024_pourcartographietoulon_vad_2024_copier_4];
lyr_EnseignesNationales_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Ordre': 'Ordre', 'Numero': 'Numero', 'Adresse': 'Adresse', 'Surface': 'Surface', 'Etablissem': 'Etablissem', 'EN': 'EN', 'Note 2024': 'Note 2024', 'Emp': 'Emp', 'VILLE': 'VILLE', 'CODE POSTAL': 'CODE POSTAL', 'IDENTIFICATION': 'IDENTIFICATION', 'surface qgis': 'surface qgis', 'Catégorie 2024': 'Catégorie 2024', });
lyr_EmplacementN1_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Ordre': 'Ordre', 'Numero': 'Numero', 'Adresse': 'Adresse', 'Surface': 'Surface', 'Etablissem': 'Etablissem', 'EN': 'EN', 'Note 2024': 'Note 2024', 'Emp': 'Emp', 'VILLE': 'VILLE', 'CODE POSTAL': 'CODE POSTAL', 'IDENTIFICATION': 'IDENTIFICATION', 'surface qgis': 'surface qgis', 'Catégorie 2024': 'Catégorie 2024', });
lyr_Locauxvacants_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Ordre': 'Ordre', 'Numero': 'Numero', 'Adresse': 'Adresse', 'Surface': 'Surface', 'Etablissem': 'Etablissem', 'EN': 'EN', 'Note 2024': 'Note 2024', 'Emp': 'Emp', 'VILLE': 'VILLE', 'CODE POSTAL': 'CODE POSTAL', 'IDENTIFICATION': 'IDENTIFICATION', 'surface qgis': 'surface qgis', 'Catégorie 2024': 'Catégorie 2024', });
lyr_ToulonVAD2024_pourcartographietoulon_vad_2024_copier_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Ordre': 'Ordre', 'Numero': 'Numero', 'Adresse': 'Adresse', 'Surface': 'Surface', 'Etablissem': 'Etablissem', 'EN': 'EN', 'Note 2024': 'Note 2024', 'Emp': 'Emp', 'VILLE': 'VILLE', 'CODE POSTAL': 'CODE POSTAL', 'IDENTIFICATION': 'IDENTIFICATION', 'surface qgis': 'surface qgis', 'Catégorie 2024': 'Catégorie 2024', });
lyr_EnseignesNationales_1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'Ordre': 'Range', 'Numero': 'TextEdit', 'Adresse': 'TextEdit', 'Surface': 'Range', 'Etablissem': 'TextEdit', 'EN': 'TextEdit', 'Note 2024': 'Range', 'Emp': 'TextEdit', 'VILLE': 'TextEdit', 'CODE POSTAL': 'Range', 'IDENTIFICATION': 'TextEdit', 'surface qgis': 'Range', 'Catégorie 2024': 'TextEdit', });
lyr_EmplacementN1_2.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'Ordre': 'Range', 'Numero': 'TextEdit', 'Adresse': 'TextEdit', 'Surface': 'Range', 'Etablissem': 'TextEdit', 'EN': 'TextEdit', 'Note 2024': 'Range', 'Emp': 'TextEdit', 'VILLE': 'TextEdit', 'CODE POSTAL': 'Range', 'IDENTIFICATION': 'TextEdit', 'surface qgis': 'Range', 'Catégorie 2024': 'TextEdit', });
lyr_Locauxvacants_3.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'Ordre': 'Range', 'Numero': 'TextEdit', 'Adresse': 'TextEdit', 'Surface': 'Range', 'Etablissem': 'TextEdit', 'EN': 'TextEdit', 'Note 2024': 'Range', 'Emp': 'TextEdit', 'VILLE': 'TextEdit', 'CODE POSTAL': 'Range', 'IDENTIFICATION': 'TextEdit', 'surface qgis': 'Range', 'Catégorie 2024': 'TextEdit', });
lyr_ToulonVAD2024_pourcartographietoulon_vad_2024_copier_4.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'Ordre': 'Range', 'Numero': 'TextEdit', 'Adresse': 'TextEdit', 'Surface': 'Range', 'Etablissem': 'TextEdit', 'EN': 'TextEdit', 'Note 2024': 'Range', 'Emp': 'TextEdit', 'VILLE': 'TextEdit', 'CODE POSTAL': 'Range', 'IDENTIFICATION': 'TextEdit', 'surface qgis': 'Range', 'Catégorie 2024': 'TextEdit', });
lyr_EnseignesNationales_1.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'Ordre': 'hidden field', 'Numero': 'no label', 'Adresse': 'no label', 'Surface': 'no label', 'Etablissem': 'no label', 'EN': 'no label', 'Note 2024': 'no label', 'Emp': 'no label', 'VILLE': 'no label', 'CODE POSTAL': 'no label', 'IDENTIFICATION': 'hidden field', 'surface qgis': 'no label', 'Catégorie 2024': 'no label', });
lyr_EmplacementN1_2.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'Ordre': 'hidden field', 'Numero': 'no label', 'Adresse': 'no label', 'Surface': 'no label', 'Etablissem': 'no label', 'EN': 'no label', 'Note 2024': 'no label', 'Emp': 'no label', 'VILLE': 'no label', 'CODE POSTAL': 'no label', 'IDENTIFICATION': 'hidden field', 'surface qgis': 'no label', 'Catégorie 2024': 'no label', });
lyr_Locauxvacants_3.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'Ordre': 'hidden field', 'Numero': 'no label', 'Adresse': 'no label', 'Surface': 'no label', 'Etablissem': 'no label', 'EN': 'no label', 'Note 2024': 'no label', 'Emp': 'no label', 'VILLE': 'no label', 'CODE POSTAL': 'no label', 'IDENTIFICATION': 'hidden field', 'surface qgis': 'no label', 'Catégorie 2024': 'no label', });
lyr_ToulonVAD2024_pourcartographietoulon_vad_2024_copier_4.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'Ordre': 'hidden field', 'Numero': 'no label', 'Adresse': 'no label', 'Surface': 'no label', 'Etablissem': 'no label', 'EN': 'no label', 'Note 2024': 'no label', 'Emp': 'no label', 'VILLE': 'no label', 'CODE POSTAL': 'no label', 'IDENTIFICATION': 'hidden field', 'surface qgis': 'no label', 'Catégorie 2024': 'no label', });
lyr_ToulonVAD2024_pourcartographietoulon_vad_2024_copier_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});