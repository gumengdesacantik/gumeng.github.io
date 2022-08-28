var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_GUMENG_1 = new ol.format.GeoJSON();
var features_GUMENG_1 = format_GUMENG_1.readFeatures(json_GUMENG_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUMENG_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUMENG_1.addFeatures(features_GUMENG_1);
var lyr_GUMENG_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GUMENG_1, 
                style: style_GUMENG_1,
                interactive: true,
                title: '<img src="styles/legend/GUMENG_1.png" /> GUMENG'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GUMENG_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GUMENG_1];
lyr_GUMENG_1.set('fieldAliases', {'nmsls': 'nmsls', });
lyr_GUMENG_1.set('fieldImages', {'nmsls': 'TextEdit', });
lyr_GUMENG_1.set('fieldLabels', {'nmsls': 'no label', });
lyr_GUMENG_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});