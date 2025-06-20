var wms_layers = [];


        var lyr_OSM_0 = new ol.layer.Tile({
            'title': 'OSM',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DKI_Jakarta_1 = new ol.format.GeoJSON();
var features_DKI_Jakarta_1 = format_DKI_Jakarta_1.readFeatures(json_DKI_Jakarta_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DKI_Jakarta_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DKI_Jakarta_1.addFeatures(features_DKI_Jakarta_1);
var lyr_DKI_Jakarta_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DKI_Jakarta_1, 
                style: style_DKI_Jakarta_1,
                popuplayertitle: 'DKI_Jakarta',
                interactive: true,
                title: '<img src="styles/legend/DKI_Jakarta_1.png" /> DKI_Jakarta'
            });
var format_area_stadion_2 = new ol.format.GeoJSON();
var features_area_stadion_2 = format_area_stadion_2.readFeatures(json_area_stadion_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_area_stadion_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_area_stadion_2.addFeatures(features_area_stadion_2);
var lyr_area_stadion_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_area_stadion_2, 
                style: style_area_stadion_2,
                popuplayertitle: 'area_stadion',
                interactive: true,
                title: '<img src="styles/legend/area_stadion_2.png" /> area_stadion'
            });
var format_stadion_point_3 = new ol.format.GeoJSON();
var features_stadion_point_3 = format_stadion_point_3.readFeatures(json_stadion_point_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_stadion_point_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stadion_point_3.addFeatures(features_stadion_point_3);
var lyr_stadion_point_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_stadion_point_3, 
                style: style_stadion_point_3,
                popuplayertitle: 'stadion_point',
                interactive: true,
                title: '<img src="styles/legend/stadion_point_3.png" /> stadion_point'
            });
var format_akses_jalan_4 = new ol.format.GeoJSON();
var features_akses_jalan_4 = format_akses_jalan_4.readFeatures(json_akses_jalan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_akses_jalan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_akses_jalan_4.addFeatures(features_akses_jalan_4);
var lyr_akses_jalan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_akses_jalan_4, 
                style: style_akses_jalan_4,
                popuplayertitle: 'akses_jalan',
                interactive: true,
                title: '<img src="styles/legend/akses_jalan_4.png" /> akses_jalan'
            });

lyr_OSM_0.setVisible(true);lyr_DKI_Jakarta_1.setVisible(true);lyr_area_stadion_2.setVisible(true);lyr_stadion_point_3.setVisible(true);lyr_akses_jalan_4.setVisible(true);
var layersList = [lyr_OSM_0,lyr_DKI_Jakarta_1,lyr_area_stadion_2,lyr_stadion_point_3,lyr_akses_jalan_4];
lyr_DKI_Jakarta_1.set('fieldAliases', {'id': 'id', });
lyr_area_stadion_2.set('fieldAliases', {'nm_stadion': 'nm_stadion', 'fngsi_area': 'fngsi_area', });
lyr_stadion_point_3.set('fieldAliases', {'nama': 'nama', 'kecamatan': 'kecamatan', 'kapasitas': 'kapasitas', 'tahun': 'tahun', 'status': 'status', 'jenis_lap': 'jenis_lap', });
lyr_akses_jalan_4.set('fieldAliases', {'akses_ke': 'akses_ke', 'nama_jalan': 'nama_jalan', });
lyr_DKI_Jakarta_1.set('fieldImages', {'id': 'TextEdit', });
lyr_area_stadion_2.set('fieldImages', {'nm_stadion': 'TextEdit', 'fngsi_area': 'TextEdit', });
lyr_stadion_point_3.set('fieldImages', {'nama': 'TextEdit', 'kecamatan': 'TextEdit', 'kapasitas': 'Range', 'tahun': 'TextEdit', 'status': 'TextEdit', 'jenis_lap': 'TextEdit', });
lyr_akses_jalan_4.set('fieldImages', {'akses_ke': 'TextEdit', 'nama_jalan': 'TextEdit', });
lyr_DKI_Jakarta_1.set('fieldLabels', {'id': 'no label', });
lyr_area_stadion_2.set('fieldLabels', {'nm_stadion': 'no label', 'fngsi_area': 'no label', });
lyr_stadion_point_3.set('fieldLabels', {'nama': 'no label', 'kecamatan': 'header label - visible with data', 'kapasitas': 'no label', 'tahun': 'no label', 'status': 'no label', 'jenis_lap': 'no label', });
lyr_akses_jalan_4.set('fieldLabels', {'akses_ke': 'no label', 'nama_jalan': 'no label', });
lyr_akses_jalan_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});