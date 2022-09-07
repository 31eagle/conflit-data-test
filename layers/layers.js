var wms_layers = [];

var format_mukim_mlk_0 = new ol.format.GeoJSON();
var features_mukim_mlk_0 = format_mukim_mlk_0.readFeatures(json_mukim_mlk_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mukim_mlk_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mukim_mlk_0.addFeatures(features_mukim_mlk_0);
var lyr_mukim_mlk_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mukim_mlk_0, 
                style: style_mukim_mlk_0,
                interactive: true,
                title: '<img src="styles/legend/mukim_mlk_0.png" /> mukim_mlk'
            });
var format_town_mlk_1 = new ol.format.GeoJSON();
var features_town_mlk_1 = format_town_mlk_1.readFeatures(json_town_mlk_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_town_mlk_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_town_mlk_1.addFeatures(features_town_mlk_1);
var lyr_town_mlk_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_town_mlk_1, 
                style: style_town_mlk_1,
                interactive: true,
                title: '<img src="styles/legend/town_mlk_1.png" /> town_mlk'
            });

lyr_mukim_mlk_0.setVisible(true);lyr_town_mlk_1.setVisible(true);
var layersList = [lyr_mukim_mlk_0,lyr_town_mlk_1];
lyr_mukim_mlk_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'MUKIM': 'MUKIM', 'STATE': 'STATE', 'DISTRICT': 'DISTRICT', 'STATE_CODE': 'STATE_CODE', 'DISTR_CODE': 'DISTR_CODE', 'MUKIM_CODE': 'MUKIM_CODE', 'FCODE': 'FCODE', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_town_mlk_1.set('fieldAliases', {'FID_town_k': 'FID_town_k', 'Id': 'Id', 'Nama': 'Nama', 'FID_distri': 'FID_distri', 'OBJECTID_1': 'OBJECTID_1', 'STATE': 'STATE', 'DISTRICT': 'DISTRICT', 'STATE_CODE': 'STATE_CODE', 'DISTR_CODE': 'DISTR_CODE', 'FCODE': 'FCODE', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_mukim_mlk_0.set('fieldImages', {'OBJECTID': '', 'MUKIM': '', 'STATE': '', 'DISTRICT': '', 'STATE_CODE': '', 'DISTR_CODE': '', 'MUKIM_CODE': '', 'FCODE': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_town_mlk_1.set('fieldImages', {'FID_town_k': '', 'Id': '', 'Nama': '', 'FID_distri': '', 'OBJECTID_1': '', 'STATE': '', 'DISTRICT': '', 'STATE_CODE': '', 'DISTR_CODE': '', 'FCODE': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_mukim_mlk_0.set('fieldLabels', {'OBJECTID': 'no label', 'MUKIM': 'header label', 'STATE': 'no label', 'DISTRICT': 'no label', 'STATE_CODE': 'no label', 'DISTR_CODE': 'no label', 'MUKIM_CODE': 'no label', 'FCODE': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_town_mlk_1.set('fieldLabels', {'FID_town_k': 'no label', 'Id': 'no label', 'Nama': 'no label', 'FID_distri': 'no label', 'OBJECTID_1': 'no label', 'STATE': 'no label', 'DISTRICT': 'no label', 'STATE_CODE': 'no label', 'DISTR_CODE': 'no label', 'FCODE': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_town_mlk_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});