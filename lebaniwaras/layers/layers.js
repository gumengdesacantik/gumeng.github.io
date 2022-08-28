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
var format_lebaniwaras_1 = new ol.format.GeoJSON();
var features_lebaniwaras_1 = format_lebaniwaras_1.readFeatures(json_lebaniwaras_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lebaniwaras_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lebaniwaras_1.addFeatures(features_lebaniwaras_1);
var lyr_lebaniwaras_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lebaniwaras_1, 
                style: style_lebaniwaras_1,
                interactive: true,
                title: '<img src="styles/legend/lebaniwaras_1.png" /> lebaniwaras'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_lebaniwaras_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_lebaniwaras_1];
lyr_lebaniwaras_1.set('fieldAliases', {'kk': 'kk', 'gid': 'gid', 'bstt': 'bstt', 'luas': 'luas', 'bsbtt': 'bsbtt', 'idsls': 'idsls', 'kdkab': 'kdkab', 'kdkec': 'kdkec', 'kdsls': 'kdsls', 'nmkab': 'nmkab', 'nmkec': 'nmkec', 'nmsls': 'nmsls', 'bstt_k': 'bstt_k', 'kddesa': 'kddesa', 'kdprov': 'kdprov', 'khusus': 'khusus', 'muatan': 'muatan', 'nmdesa': 'nmdesa', 'nmprov': 'nmprov', 'posisi': 'posisi', 'rw_dki': 'rw_dki', 'segmen': 'segmen', 'sumber': 'sumber', 'dom_sls': 'dom_sls', 'periode': 'periode', 'tingkat': 'tingkat', 'nm_gedung': 'nm_gedung', 'wil_campur': 'wil_campur', });
lyr_lebaniwaras_1.set('fieldImages', {'kk': 'TextEdit', 'gid': 'TextEdit', 'bstt': 'TextEdit', 'luas': 'TextEdit', 'bsbtt': 'TextEdit', 'idsls': 'TextEdit', 'kdkab': 'TextEdit', 'kdkec': 'TextEdit', 'kdsls': 'TextEdit', 'nmkab': 'TextEdit', 'nmkec': 'TextEdit', 'nmsls': 'TextEdit', 'bstt_k': 'TextEdit', 'kddesa': 'TextEdit', 'kdprov': 'TextEdit', 'khusus': 'TextEdit', 'muatan': 'TextEdit', 'nmdesa': 'TextEdit', 'nmprov': 'TextEdit', 'posisi': 'TextEdit', 'rw_dki': 'TextEdit', 'segmen': 'TextEdit', 'sumber': 'TextEdit', 'dom_sls': 'TextEdit', 'periode': 'TextEdit', 'tingkat': 'TextEdit', 'nm_gedung': 'TextEdit', 'wil_campur': 'TextEdit', });
lyr_lebaniwaras_1.set('fieldLabels', {'kk': 'no label', 'gid': 'no label', 'bstt': 'no label', 'luas': 'no label', 'bsbtt': 'no label', 'idsls': 'no label', 'kdkab': 'no label', 'kdkec': 'no label', 'kdsls': 'no label', 'nmkab': 'no label', 'nmkec': 'no label', 'nmsls': 'no label', 'bstt_k': 'no label', 'kddesa': 'no label', 'kdprov': 'no label', 'khusus': 'no label', 'muatan': 'no label', 'nmdesa': 'no label', 'nmprov': 'no label', 'posisi': 'no label', 'rw_dki': 'no label', 'segmen': 'no label', 'sumber': 'no label', 'dom_sls': 'no label', 'periode': 'no label', 'tingkat': 'no label', 'nm_gedung': 'no label', 'wil_campur': 'no label', });
lyr_lebaniwaras_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});