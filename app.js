const $ = (s) => document.querySelector(s);

const store = {
  get(key, fallback = []) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (err) {
      console.warn(`No se pudo leer ${key}`, err);
      return fallback;
    }
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
};

const defaultsClientes = [{"id":1001,"nombre":"Carnicería Javier","zona":"122 esq. 79","telefono":"","ruta":"Ruta inicial","deuda":0,"notas":""},{"id":1002,"nombre":"Carnicería Selika","zona":"125 y 77 (Berisso)","telefono":"","ruta":"Ruta inicial","deuda":0,"notas":""},{"id":1003,"nombre":"Carnicería Sergio Medina","zona":"122 e/ 75 y 76","telefono":"","ruta":"Ruta inicial","deuda":0,"notas":""},{"id":1004,"nombre":"Carnicería Mathyse","zona":"122 e/ 73 y 74","telefono":"","ruta":"Ruta inicial","deuda":0,"notas":""},{"id":1005,"nombre":"Autoservicio Marcos","zona":"122 e/ 72 y 73","telefono":"","ruta":"Ruta inicial","deuda":0,"notas":""},{"id":1006,"nombre":"Carnicería Miky","zona":"122 esq. 71","telefono":"","ruta":"Ruta inicial","deuda":0,"notas":""},{"id":1007,"nombre":"Autoservicio Emanuel","zona":"122 y 67","telefono":"","ruta":"Ruta inicial","deuda":0,"notas":""},{"id":1008,"nombre":"Carnicería Villa Arguello","zona":"122 e/ 61 y 62","telefono":"","ruta":"Ruta inicial","deuda":0,"notas":""},{"id":1009,"nombre":"Autoservicio Juan","zona":"123 e/ 63 y 64","telefono":"","ruta":"Ruta inicial","deuda":0,"notas":""},{"id":1010,"nombre":"Autoservicio Matías","zona":"128 e/ 61 y 62","telefono":"","ruta":"Ruta inicial","deuda":0,"notas":""},{"id":1011,"nombre":"Carnicería Nery","zona":"153 e/ 16 y 17","telefono":"","ruta":"Ruta inicial","deuda":0,"notas":""},{"id":1012,"nombre":"Carnicería Doña Erica","zona":"153 e/ 12 y 13","telefono":"","ruta":"Ruta inicial","deuda":0,"notas":""},{"id":1013,"nombre":"Carnicería Mareco","zona":"154 esq. 8","telefono":"","ruta":"Ruta inicial","deuda":0,"notas":""},{"id":1014,"nombre":"Carnicería Miriam","zona":"8 e/ 157 y 158","telefono":"","ruta":"Ruta inicial","deuda":0,"notas":""},{"id":1015,"nombre":"Autoservicio Corleone","zona":"156 norte e/ 8 y 9","telefono":"","ruta":"Ruta inicial","deuda":0,"notas":""},{"id":1016,"nombre":"Carnicería Fabián","zona":"9 esq. 156 norte","telefono":"","ruta":"Ruta inicial","deuda":0,"notas":""},{"id":1017,"nombre":"Carnicería Doña Erica","zona":"159 e/ 8 y 9","telefono":"","ruta":"Ruta inicial","deuda":0,"notas":""},{"id":1018,"nombre":"Autoservicio Timossi","zona":"11 esq. 161","telefono":"","ruta":"Ruta inicial","deuda":0,"notas":""},{"id":1019,"nombre":"Carnicería Joni Don Pedro","zona":"11 e/ 161 y 162","telefono":"","ruta":"Ruta inicial","deuda":0,"notas":""},{"id":1020,"nombre":"Autoservicio Putnik Yesica","zona":"11 e/ 158 y 157","telefono":"","ruta":"Ruta inicial","deuda":0,"notas":""},{"id":1021,"nombre":"Autoservicio México","zona":"11 e/ 156 y 157","telefono":"","ruta":"Ruta inicial","deuda":0,"notas":""},{"id":1022,"nombre":"Carnicería Gabriel","zona":"157 e/ 14 y 15","telefono":"","ruta":"Ruta inicial","deuda":0,"notas":""},{"id":1023,"nombre":"Leonardo","zona":"15 e/ 156 y 157","telefono":"","ruta":"Ruta inicial","deuda":0,"notas":""},{"id":1024,"nombre":"Carnicería Daniel Chavez","zona":"164 e/ 19 y 20","telefono":"","ruta":"Ruta inicial","deuda":0,"notas":""},{"id":1025,"nombre":"Carnicería Doña Erica","zona":"23 e/ 163 y 164","telefono":"","ruta":"Ruta inicial","deuda":0,"notas":""},{"id":1026,"nombre":"Carnicería Zuni","zona":"66 e/ 120 y 121","telefono":"","ruta":"Miércoles","deuda":0,"notas":""},{"id":1027,"nombre":"Autoservicio Florencia","zona":"Montevideo e/ 44 y 45","telefono":"","ruta":"Miércoles","deuda":0,"notas":""},{"id":1028,"nombre":"Carnicería Julio","zona":"Montevideo e/ 43 y 44","telefono":"","ruta":"Miércoles","deuda":0,"notas":""},{"id":1029,"nombre":"Carnicería Miky","zona":"Montevideo e/ 38 y 39","telefono":"","ruta":"Miércoles","deuda":0,"notas":""},{"id":1030,"nombre":"Carnicería Oscar","zona":"Av. Montevideo esq. 35","telefono":"","ruta":"Miércoles","deuda":0,"notas":""},{"id":1031,"nombre":"Autoservicio T-Conviene","zona":"34 e/ Montevideo y 174","telefono":"","ruta":"Miércoles","deuda":0,"notas":""},{"id":1032,"nombre":"Autoservicio Lin Yiping","zona":"Montevideo e/ 26 y 27","telefono":"","ruta":"Miércoles","deuda":0,"notas":""},{"id":1033,"nombre":"T-Conviene 2","zona":"162 y 27","telefono":"","ruta":"Miércoles","deuda":0,"notas":""},{"id":1034,"nombre":"Autoservicio Luciana","zona":"Montevideo esq. 24","telefono":"","ruta":"Miércoles","deuda":0,"notas":""},{"id":1035,"nombre":"Carnicería Doña Erica","zona":"23 esq. Montevideo","telefono":"","ruta":"Miércoles","deuda":0,"notas":""},{"id":1036,"nombre":"Carnicería Mareco","zona":"Montevideo e/ 19 y 20","telefono":"","ruta":"Miércoles","deuda":0,"notas":""},{"id":1037,"nombre":"Autoservicio Pauli","zona":"12 esq. 171","telefono":"","ruta":"Miércoles","deuda":0,"notas":""},{"id":1038,"nombre":"Carnicería El Maute","zona":"13 esq. 165","telefono":"","ruta":"Miércoles","deuda":0,"notas":""},{"id":1039,"nombre":"Autoservicio Parodi","zona":"164 e/ 14 y 17","telefono":"","ruta":"Miércoles","deuda":0,"notas":""},{"id":1040,"nombre":"Carnicería Marecos","zona":"16 esq. 164","telefono":"","ruta":"Miércoles","deuda":0,"notas":""},{"id":1041,"nombre":"Carnicería Marecos","zona":"17 e/ 162 y 162 norte","telefono":"","ruta":"Miércoles","deuda":0,"notas":""},{"id":1042,"nombre":"Autoservicio El Tato","zona":"163 e/ 11 y 12","telefono":"","ruta":"Miércoles","deuda":0,"notas":""},{"id":1043,"nombre":"Almacén La Nona","zona":"10 e/ 167 y Montevideo","telefono":"","ruta":"Miércoles","deuda":0,"notas":""},{"id":1044,"nombre":"Ondarcuhu Mari","zona":"7 e/ Montevideo y 172","telefono":"","ruta":"Miércoles","deuda":0,"notas":""},{"id":1045,"nombre":"Analía Debiasse","zona":"4 e/ Montevideo y 171","telefono":"","ruta":"Miércoles","deuda":0,"notas":""},{"id":1046,"nombre":"La Hacienda","zona":"","telefono":"","ruta":"Miércoles","deuda":0,"notas":""},{"id":1047,"nombre":"Fernandez Carlos","zona":"4 esq. 158","telefono":"","ruta":"Miércoles","deuda":0,"notas":""},{"id":1048,"nombre":"Nuñez Jor","zona":"8 e/ 152 y 152 norte","telefono":"","ruta":"Miércoles","deuda":0,"notas":""},{"id":1049,"nombre":"Carnicería Daniel Chavez","zona":"162 e/ 24 y 25","telefono":"","ruta":"Miércoles","deuda":0,"notas":""},{"id":1050,"nombre":"Fede Martinez","zona":"609 e/ 126 y 126 bis","telefono":"","ruta":"Miércoles","deuda":0,"notas":""},{"id":1051,"nombre":"Daniel Martinez","zona":"26 e/ 162","telefono":"","ruta":"Miércoles","deuda":0,"notas":""},{"id":1052,"nombre":"Pedro Marttiano","zona":"80 e/ 120 y 121","telefono":"","ruta":"Miércoles","deuda":0,"notas":""},{"id":1053,"nombre":"Juan Medina","zona":"6 esq. 38 (msje)","telefono":"","ruta":"Jueves","deuda":0,"notas":""},{"id":1054,"nombre":"Miky 610","zona":"7 esq. 610","telefono":"","ruta":"Jueves","deuda":0,"notas":""},{"id":1055,"nombre":"Molinaro","zona":"7 e/ 602 y 603","telefono":"","ruta":"Jueves","deuda":0,"notas":""},{"id":1056,"nombre":"Carnicería Gabriel","zona":"7 e/ 602 y 603","telefono":"","ruta":"Jueves","deuda":0,"notas":""},{"id":1057,"nombre":"Argenchino","zona":"7 y 95","telefono":"","ruta":"Jueves","deuda":0,"notas":""},{"id":1058,"nombre":"Loredo Sebastian","zona":"Diag.","telefono":"","ruta":"Jueves","deuda":0,"notas":""}];

const defaultsProductos = [{"id":2001,"nombre":"Provoleta Horma Tradicional","proveedor":"Mauro / Nonna Pia","precio":0,"costo":14951,"alias":"provo horma","codigo":"","presentacion":"3,5 kg aprox","categoria":"Provoletas"},{"id":2002,"nombre":"Provoleta Horma Tradicional Ahumada","proveedor":"Mauro / Nonna Pia","precio":0,"costo":16886,"alias":"provo horma ahumada","codigo":"","presentacion":"3,1 kg aprox","categoria":"Provoletas"},{"id":2003,"nombre":"Provoleta Cazuela Aluminio","proveedor":"Mauro / Nonna Pia","precio":0,"costo":18248,"alias":"cazuela","codigo":"","presentacion":"Caja x20 / 3,4 kg aprox","categoria":"Provoletas"},{"id":2004,"nombre":"Provoleta Fraccionada x1","proveedor":"Mauro / Nonna Pia","precio":0,"costo":17381,"alias":"provo x1","codigo":"","presentacion":"Caja x32 / 5,5 kg aprox","categoria":"Provoletas"},{"id":2005,"nombre":"Provoleta Mini x4","proveedor":"Mauro / Nonna Pia","precio":0,"costo":18248,"alias":"6m","codigo":"","presentacion":"Caja x24 / 4,5 kg aprox","categoria":"Provoletas"},{"id":2006,"nombre":"Queso de Campo Hilado","proveedor":"Mauro / Nonna Pia","precio":0,"costo":44550,"alias":"campo hilado","codigo":"","presentacion":"Caja cerrada x12","categoria":"Provoletas"},{"id":2007,"nombre":"Cazuela Ahumada","proveedor":"Mauro / Nonna Pia","precio":0,"costo":32096,"alias":"cazuela ahumada","codigo":"","presentacion":"Caja cerrada x10","categoria":"Provoletas"},{"id":2008,"nombre":"Reggianito Negro Melincué","proveedor":"Mauro / Nonna Pia","precio":0,"costo":16112,"alias":"regg negro","codigo":"","presentacion":"Por kg","categoria":"Quesos"},{"id":2009,"nombre":"Reggianito Sin Pintar Melincué","proveedor":"Mauro / Nonna Pia","precio":0,"costo":15370,"alias":"regg sin pintar","codigo":"","presentacion":"Por kg","categoria":"Quesos"},{"id":2010,"nombre":"Parmesano Melincué","proveedor":"Mauro / Nonna Pia","precio":0,"costo":16324,"alias":"parmesano","codigo":"","presentacion":"Por kg","categoria":"Quesos"},{"id":2011,"nombre":"Fontina Pic Melincué","proveedor":"Mauro / Nonna Pia","precio":0,"costo":16536,"alias":"fontina","codigo":"","presentacion":"Por kg","categoria":"Quesos"},{"id":2012,"nombre":"Por Salut Light Melincué","proveedor":"Mauro / Nonna Pia","precio":0,"costo":9609,"alias":"por salut light","codigo":"","presentacion":"Por kg","categoria":"Quesos"},{"id":2013,"nombre":"Sardo Los Vasquitos","proveedor":"Mauro / Nonna Pia","precio":0,"costo":9646,"alias":"sardo vasquitos","codigo":"","presentacion":"Por kg","categoria":"Quesos"},{"id":2014,"nombre":"Barra Tybo Los Vasquitos","proveedor":"Mauro / Nonna Pia","precio":0,"costo":9222,"alias":"barra vasquitos","codigo":"","presentacion":"Por kg","categoria":"Quesos"},{"id":2015,"nombre":"Cremoso Los Vasquitos","proveedor":"Mauro / Nonna Pia","precio":0,"costo":6890,"alias":"cremoso vasquitos","codigo":"","presentacion":"Por kg","categoria":"Quesos"},{"id":2016,"nombre":"Matambre de Carne Monti","proveedor":"Mauro / Nonna Pia","precio":0,"costo":18527,"alias":"mat carne","codigo":"","presentacion":"Por kg","categoria":"Fiambres"},{"id":2017,"nombre":"Matambre de Pollo Monti","proveedor":"Mauro / Nonna Pia","precio":0,"costo":14076,"alias":"mat pollo","codigo":"","presentacion":"Por kg","categoria":"Fiambres"},{"id":2018,"nombre":"CAM Ambos Monti","proveedor":"Mauro / Nonna Pia","precio":0,"costo":8630,"alias":"cam ambos","codigo":"","presentacion":"Por kg","categoria":"Fiambres"},{"id":2019,"nombre":"Mortadela Monti","proveedor":"Mauro / Nonna Pia","precio":0,"costo":6226,"alias":"mortadela","codigo":"","presentacion":"Por kg","categoria":"Fiambres"},{"id":2020,"nombre":"Bolón con Cuero Monti","proveedor":"Mauro / Nonna Pia","precio":0,"costo":7474,"alias":"bolon","codigo":"","presentacion":"Por kg","categoria":"Fiambres"},{"id":2021,"nombre":"Cocido de Pata Media Caña Monti","proveedor":"Mauro / Nonna Pia","precio":0,"costo":7182,"alias":"cocido pata","codigo":"","presentacion":"Por kg","categoria":"Fiambres"},{"id":2022,"nombre":"Jamonada CAM Monti","proveedor":"Mauro / Nonna Pia","precio":0,"costo":5335,"alias":"jamonada","codigo":"","presentacion":"Por kg","categoria":"Fiambres"},{"id":2023,"nombre":"Paleta Monti","proveedor":"Mauro / Nonna Pia","precio":0,"costo":6750,"alias":"paleta","codigo":"","presentacion":"Por kg","categoria":"Fiambres"},{"id":2024,"nombre":"Queso Azul San Gotardo","proveedor":"Mauro / Nonna Pia","precio":0,"costo":12301,"alias":"azul","codigo":"","presentacion":"Por kg","categoria":"Quesos"},{"id":2025,"nombre":"Cheddar Pouch","proveedor":"Mauro / Nonna Pia","precio":0,"costo":34009,"alias":"pouch","codigo":"","presentacion":"Caja","categoria":"Quesos"},{"id":2026,"nombre":"Cheddar Feteado","proveedor":"Mauro / Nonna Pia","precio":0,"costo":41488,"alias":"feteado","codigo":"","presentacion":"Caja","categoria":"Quesos"},{"id":2027,"nombre":"Queso Rallado por Bolsa/Kg","proveedor":"Mauro / Nonna Pia","precio":0,"costo":12285,"alias":"rallado bolsa","codigo":"","presentacion":"Bolsa / kg","categoria":"Quesos"},{"id":2028,"nombre":"Queso Rallado Potes","proveedor":"Mauro / Nonna Pia","precio":0,"costo":12285,"alias":"rallado potes","codigo":"","presentacion":"Potes","categoria":"Quesos"},{"id":2029,"nombre":"Pategrás Santa María","proveedor":"Mauro / Nonna Pia","precio":0,"costo":13663,"alias":"pategras","codigo":"","presentacion":"Por kg","categoria":"Quesos"},{"id":2030,"nombre":"Barra Tybo Santa María","proveedor":"Mauro / Nonna Pia","precio":0,"costo":9307,"alias":"barra santa maria","codigo":"","presentacion":"Por kg","categoria":"Quesos"},{"id":2031,"nombre":"Cremoso Porave","proveedor":"Mauro / Nonna Pia","precio":0,"costo":6911,"alias":"cremoso porave","codigo":"","presentacion":"Por kg","categoria":"Quesos"},{"id":2032,"nombre":"Muzzarella Foggia","proveedor":"Mauro / Nonna Pia","precio":0,"costo":8558,"alias":"muzza","codigo":"","presentacion":"Por kg","categoria":"Quesos"},{"id":2033,"nombre":"Bastón Longaniza","proveedor":"Casuarinas","precio":0,"costo":11627,"alias":"longa baston","codigo":"088","presentacion":"Por kg","categoria":"Jamonería"},{"id":2034,"nombre":"Bondiola Elaborada","proveedor":"Casuarinas","precio":0,"costo":17789,"alias":"bondiola","codigo":"092","presentacion":"Por kg","categoria":"Jamonería"},{"id":2035,"nombre":"Cantimpalo","proveedor":"Casuarinas","precio":0,"costo":11878,"alias":"cantimpalo","codigo":"101","presentacion":"Por kg","categoria":"Jamonería"},{"id":2036,"nombre":"Chacarero Fino","proveedor":"Casuarinas","precio":0,"costo":11627,"alias":"chacarero fino","codigo":"087","presentacion":"Por kg","categoria":"Jamonería"},{"id":2037,"nombre":"Chacarero Grueso","proveedor":"Casuarinas","precio":0,"costo":11627,"alias":"chacarero grueso","codigo":"082","presentacion":"Por kg","categoria":"Jamonería"},{"id":2038,"nombre":"Chorizos Colorados","proveedor":"Casuarinas","precio":0,"costo":11250,"alias":"chorizo colorado","codigo":"105","presentacion":"Por kg","categoria":"Jamonería"},{"id":2039,"nombre":"Jamón Cocido 1ra","proveedor":"Casuarinas","precio":0,"costo":8072,"alias":"jamon cocido","codigo":"094","presentacion":"Por kg","categoria":"Jamonería"},{"id":2040,"nombre":"Jamón Crudo","proveedor":"Casuarinas","precio":0,"costo":23006,"alias":"jamon crudo","codigo":"096","presentacion":"Por kg","categoria":"Jamonería"},{"id":2041,"nombre":"Jamón Crudo Parma","proveedor":"Casuarinas","precio":0,"costo":28044,"alias":"crudo parma","codigo":"107","presentacion":"Por kg","categoria":"Jamonería"},{"id":2042,"nombre":"Jamón Natural","proveedor":"Casuarinas","precio":0,"costo":9764,"alias":"jamon natural","codigo":"095","presentacion":"Por kg","categoria":"Jamonería"},{"id":2043,"nombre":"Lomo Ahumado","proveedor":"Casuarinas","precio":0,"costo":12616,"alias":"lomo ahumado","codigo":"097","presentacion":"Por kg","categoria":"Jamonería"},{"id":2044,"nombre":"Lomo con Hierbas","proveedor":"Casuarinas","precio":0,"costo":13132,"alias":"lomo hierbas","codigo":"098","presentacion":"Por kg","categoria":"Jamonería"},{"id":2045,"nombre":"Longaniza Calabresa","proveedor":"Casuarinas","precio":0,"costo":11250,"alias":"calabresa","codigo":"090","presentacion":"Por kg","categoria":"Jamonería"},{"id":2046,"nombre":"Paleta Cocida","proveedor":"Casuarinas","precio":0,"costo":6939,"alias":"paleta cocida","codigo":"093","presentacion":"Por kg","categoria":"Jamonería"},{"id":2047,"nombre":"Panceta Ahumada Económica","proveedor":"Casuarinas","precio":0,"costo":11395,"alias":"panceta ah econ","codigo":"104","presentacion":"Por kg","categoria":"Jamonería"},{"id":2048,"nombre":"Panceta Ahumada","proveedor":"Casuarinas","precio":0,"costo":14723,"alias":"panceta ahumada","codigo":"100","presentacion":"Por kg","categoria":"Jamonería"},{"id":2049,"nombre":"Panceta Salada","proveedor":"Casuarinas","precio":0,"costo":14723,"alias":"panceta salada","codigo":"058","presentacion":"Por kg","categoria":"Jamonería"},{"id":2050,"nombre":"Pepperoni","proveedor":"Casuarinas","precio":0,"costo":12956,"alias":"pepperoni","codigo":"114","presentacion":"Por kg","categoria":"Jamonería"},{"id":2051,"nombre":"Salame Milán","proveedor":"Casuarinas","precio":0,"costo":10984,"alias":"salame milan","codigo":"091","presentacion":"Por kg","categoria":"Jamonería"},{"id":2052,"nombre":"Salamín Picado Fino","proveedor":"Casuarinas","precio":0,"costo":11250,"alias":"salamin fino","codigo":"085","presentacion":"Por kg","categoria":"Jamonería"},{"id":2053,"nombre":"Salamín Picado Grueso","proveedor":"Casuarinas","precio":0,"costo":11250,"alias":"salamin grueso","codigo":"086","presentacion":"Por kg","categoria":"Jamonería"},{"id":2054,"nombre":"Azúcar Impalpable 250 g","proveedor":"Metti","precio":0,"costo":1479.5,"alias":"azucar impalpable","codigo":"MRR01","presentacion":"250 g","categoria":"Repostería"},{"id":2055,"nombre":"Azúcar Negra 300 g","proveedor":"Metti","precio":0,"costo":1600.5,"alias":"azucar negra","codigo":"MRR02","presentacion":"300 g","categoria":"Repostería"},{"id":2056,"nombre":"Bicarbonato de Sodio 320 g","proveedor":"Metti","precio":0,"costo":0,"alias":"bicarbonato","codigo":"MRR03","presentacion":"320 g","categoria":"Repostería"},{"id":2057,"nombre":"Orégano en Hojas 50 g","proveedor":"Metti","precio":0,"costo":1265,"alias":"oregano","codigo":"MER01","presentacion":"50 g","categoria":"Especias y condimentos"},{"id":2058,"nombre":"Provenzal 70 g","proveedor":"Metti","precio":0,"costo":1892,"alias":"provenzal","codigo":"MER02","presentacion":"70 g","categoria":"Especias y condimentos"},{"id":2059,"nombre":"Ajo en Polvo 170 g","proveedor":"Metti","precio":0,"costo":3066.8,"alias":"ajo en polvo","codigo":"MER03","presentacion":"170 g","categoria":"Especias y condimentos"},{"id":2060,"nombre":"Ajo Granulado 135 g","proveedor":"Metti","precio":0,"costo":2977.7,"alias":"ajo granulado","codigo":"MER04","presentacion":"135 g","categoria":"Especias y condimentos"},{"id":2061,"nombre":"Pimentón Extra 135 g","proveedor":"Metti","precio":0,"costo":1897.5,"alias":"pimenton","codigo":"MER05","presentacion":"135 g","categoria":"Especias y condimentos"},{"id":2062,"nombre":"Ají Molido 115 g","proveedor":"Metti","precio":0,"costo":1804,"alias":"aji molido","codigo":"MER06","presentacion":"115 g","categoria":"Especias y condimentos"},{"id":2063,"nombre":"Olivares Metti 500 cc","proveedor":"Metti","precio":0,"costo":3371.54,"alias":"olivares 500","codigo":"MAO01","presentacion":"500 cc","categoria":"Otros"},{"id":2064,"nombre":"Olivares Metti 900 cc","proveedor":"Metti","precio":0,"costo":5445.79,"alias":"olivares 900","codigo":"MAO02","presentacion":"900 cc","categoria":"Otros"},{"id":2065,"nombre":"Olivares Metti 2000 cc","proveedor":"Metti","precio":0,"costo":11641.21,"alias":"olivares 2l","codigo":"MAO03","presentacion":"2000 cc","categoria":"Otros"},{"id":2066,"nombre":"Chimichurri Original 260 g","proveedor":"Metti","precio":0,"costo":1662.01,"alias":"chimi original","codigo":"MRS01","presentacion":"260 g","categoria":"Salsas y aderezos"},{"id":2067,"nombre":"Chimichurri Hot 260 g","proveedor":"Metti","precio":0,"costo":1675.08,"alias":"chimi hot","codigo":"MRS02","presentacion":"260 g","categoria":"Salsas y aderezos"},{"id":2068,"nombre":"Chimichurri Ahumado 260 g","proveedor":"Metti","precio":0,"costo":1692.9,"alias":"chimi ahumado","codigo":"MRS03","presentacion":"260 g","categoria":"Salsas y aderezos"},{"id":2069,"nombre":"Picante Cayena 180 g","proveedor":"Metti","precio":0,"costo":1595.48,"alias":"cayena","codigo":"MRS04","presentacion":"180 g","categoria":"Salsas y aderezos"},{"id":2070,"nombre":"Aderezo Humo Líquido 180 g","proveedor":"Metti","precio":0,"costo":1588.38,"alias":"humo liquido","codigo":"MRS05","presentacion":"180 g","categoria":"Salsas y aderezos"},{"id":2071,"nombre":"Salsa de Soja Original 260 g","proveedor":"Metti","precio":0,"costo":1764.18,"alias":"soja","codigo":"MRS06","presentacion":"260 g","categoria":"Salsas y aderezos"},{"id":2072,"nombre":"Aderezo Panceta Ahumada con Cebolla 180 g","proveedor":"Metti","precio":0,"costo":1778.44,"alias":"panceta cebolla","codigo":"MRS07","presentacion":"180 g","categoria":"Salsas y aderezos"},{"id":2073,"nombre":"Salsa de Ajo 180 g","proveedor":"Metti","precio":0,"costo":1608.55,"alias":"salsa ajo","codigo":"MRS08","presentacion":"180 g","categoria":"Salsas y aderezos"},{"id":2074,"nombre":"Picante Habanero 180 g","proveedor":"Metti","precio":0,"costo":1774.87,"alias":"habanero","codigo":"MRS09","presentacion":"180 g","categoria":"Salsas y aderezos"},{"id":2075,"nombre":"Salsa Teriyaki 180 g","proveedor":"Metti","precio":0,"costo":1734.48,"alias":"teriyaki","codigo":"MRS10","presentacion":"180 g","categoria":"Salsas y aderezos"},{"id":2076,"nombre":"Salsa Barbacoa Tipo Texana 260 g","proveedor":"Metti","precio":0,"costo":1868.72,"alias":"barbacoa","codigo":"MRS11","presentacion":"260 g","categoria":"Salsas y aderezos"},{"id":2077,"nombre":"Ketchup 260 g","proveedor":"Metti","precio":0,"costo":1868.72,"alias":"ketchup","codigo":"MRS12","presentacion":"260 g","categoria":"Salsas y aderezos"},{"id":2078,"nombre":"Mostaza Original 260 g","proveedor":"Metti","precio":0,"costo":1798.63,"alias":"mostaza","codigo":"MRS13","presentacion":"260 g","categoria":"Salsas y aderezos"},{"id":2079,"nombre":"Mostaza Miel 260 g","proveedor":"Metti","precio":0,"costo":1841.4,"alias":"mostaza miel","codigo":"MRS14","presentacion":"260 g","categoria":"Salsas y aderezos"},{"id":2080,"nombre":"Bacon Panceta y Cebolla 270 g","proveedor":"Metti","precio":0,"costo":2227.5,"alias":"bacon","codigo":"MRS15","presentacion":"270 g","categoria":"Salsas y aderezos"},{"id":2081,"nombre":"Mayonesa Guacamole 260 g","proveedor":"Metti","precio":0,"costo":1987.52,"alias":"guacamole","codigo":"MRS16","presentacion":"260 g","categoria":"Salsas y aderezos"},{"id":2082,"nombre":"Mayonesa con Ajo 260 g","proveedor":"Metti","precio":0,"costo":2040.98,"alias":"mayonesa ajo","codigo":"MRS17","presentacion":"260 g","categoria":"Salsas y aderezos"},{"id":2083,"nombre":"Mayonesa Picante 260 g","proveedor":"Metti","precio":0,"costo":2027.92,"alias":"mayonesa picante","codigo":"MRS18","presentacion":"260 g","categoria":"Salsas y aderezos"},{"id":2084,"nombre":"Picante Cayena Gastronómico 930 g","proveedor":"Metti","precio":0,"costo":3516.48,"alias":"cayena 930","codigo":"MGS01","presentacion":"930 g","categoria":"Gastronómico"},{"id":2085,"nombre":"Aderezo Humo Líquido Gastronómico 930 g","proveedor":"Metti","precio":0,"costo":3729.13,"alias":"humo 930","codigo":"MGS02","presentacion":"930 g","categoria":"Gastronómico"},{"id":2086,"nombre":"Salsa de Soja Original Gastronómico 930 g","proveedor":"Metti","precio":0,"costo":3283.63,"alias":"soja 930","codigo":"MGS03","presentacion":"930 g","categoria":"Gastronómico"},{"id":2087,"nombre":"Barbacoa Tipo Texana Gastronómica 930 g","proveedor":"Metti","precio":0,"costo":4160.38,"alias":"barbacoa 930","codigo":"MGS04","presentacion":"930 g","categoria":"Gastronómico"},{"id":2088,"nombre":"Mostaza Original Gastronómica 930 g","proveedor":"Metti","precio":0,"costo":3147.01,"alias":"mostaza 930","codigo":"MGS05","presentacion":"930 g","categoria":"Gastronómico"},{"id":2089,"nombre":"Chimichurri Original Gastronómico 930 g","proveedor":"Metti","precio":0,"costo":2970,"alias":"chimi 930","codigo":"MGS06","presentacion":"930 g","categoria":"Gastronómico"},{"id":2090,"nombre":"Mostaza con Miel Gastronómica 930 g","proveedor":"Metti","precio":0,"costo":3726.76,"alias":"mostaza miel 930","codigo":"MGS07","presentacion":"930 g","categoria":"Gastronómico"},{"id":2091,"nombre":"Mayonesa de Ajo Gastronómica 930 g","proveedor":"Metti","precio":0,"costo":4009.5,"alias":"mayo ajo 930","codigo":"MGS08","presentacion":"930 g","categoria":"Gastronómico"},{"id":2092,"nombre":"Salsa Teriyaki Gastronómica 930 g","proveedor":"Metti","precio":0,"costo":3796.85,"alias":"teriyaki 930","codigo":"MGS09","presentacion":"930 g","categoria":"Gastronómico"},{"id":2093,"nombre":"Salsa Caesar Gastronómica 930 g","proveedor":"Metti","precio":0,"costo":3793.28,"alias":"caesar 930","codigo":"MGS10","presentacion":"930 g","categoria":"Gastronómico"},{"id":2094,"nombre":"Ketchup Gastronómico 930 g","proveedor":"Metti","precio":0,"costo":4160.38,"alias":"ketchup 930","codigo":"MGS11","presentacion":"930 g","categoria":"Gastronómico"},{"id":2095,"nombre":"Quebracho Líquido Gastronómico 930 g","proveedor":"Metti","precio":0,"costo":4838.33,"alias":"quebracho 930","codigo":"MGS12","presentacion":"930 g","categoria":"Gastronómico"},{"id":2096,"nombre":"Sardo FM","proveedor":"FM","precio":0,"costo":0,"alias":"sardo fm","codigo":"","presentacion":"Por kg","categoria":"Quesos"},{"id":2097,"nombre":"Queso Barra FM","proveedor":"FM","precio":0,"costo":0,"alias":"barra fm","codigo":"","presentacion":"Por kg","categoria":"Quesos"}];

function normalizar(texto) {
  return String(texto || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

function claveCliente(c) {
  return normalizar(`${c.nombre}|${c.zona || ''}`);
}

function claveProducto(p) {
  return normalizar(`${p.nombre}|${p.proveedor || ''}`);
}

function hidratarBaseCompleta() {
  const version = Number(localStorage.getItem('distrilacSeedVersion') || 0);
  let clientesGuardados = store.get('clientes', []);
  let productosGuardados = store.get('productos', []);

  if (!clientesGuardados.length) {
    clientesGuardados = defaultsClientes.map((c) => ({ ...c }));
  } else if (version < 2) {
    if (clientesGuardados.length <= 10) {
      clientesGuardados = defaultsClientes.map((c) => ({ ...c }));
    } else {
      const existentes = new Set(clientesGuardados.map(claveCliente));
      defaultsClientes.forEach((c) => {
        if (!existentes.has(claveCliente(c))) clientesGuardados.push({ ...c });
      });
    }
  }

  if (!productosGuardados.length) {
    productosGuardados = defaultsProductos.map((p) => ({ ...p }));
  } else if (version < 2) {
    if (productosGuardados.length <= 15) {
      const preciosPrevios = productosGuardados
        .filter((p) => Number(p.precio || 0) > 0)
        .map((p) => ({ nombre: normalizar(p.nombre), precio: Number(p.precio || 0) }));

      productosGuardados = defaultsProductos.map((p) => {
        const nombre = normalizar(p.nombre);
        const previo = preciosPrevios.find((x) => nombre.includes(x.nombre) || x.nombre.includes(nombre));
        return { ...p, precio: previo ? previo.precio : Number(p.precio || 0) };
      });
    } else {
      const existentes = new Set(productosGuardados.map(claveProducto));
      defaultsProductos.forEach((p) => {
        if (!existentes.has(claveProducto(p))) productosGuardados.push({ ...p });
      });
    }
  }

  store.set('clientes', clientesGuardados);
  store.set('productos', productosGuardados);
  localStorage.setItem('distrilacSeedVersion', '2');
  return { clientesGuardados, productosGuardados };
}

const baseInicial = hidratarBaseCompleta();
let clientes = baseInicial.clientesGuardados;
let productos = baseInicial.productosGuardados;
let pedidos = store.get('pedidos', []);
let clientePedido = null;
let itemsPedido = [];

function esc(texto) {
  return String(texto ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function moneda(valor) {
  return Number(valor || 0).toLocaleString('es-AR');
}

function activarTab(id) {
  document.querySelectorAll('.tab').forEach((tab) => tab.classList.remove('active'));
  document.querySelectorAll('[data-tab]').forEach((btn) => btn.classList.remove('active'));
  $(`#${id}`)?.classList.add('active');
  document.querySelector(`[data-tab="${id}"]`)?.classList.add('active');
}

document.querySelectorAll('[data-tab]').forEach((btn) => {
  btn.addEventListener('click', () => activarTab(btn.dataset.tab));
});

function filtrarClientes(q = '') {
  const needle = normalizar(q);
  return clientes.filter((c) =>
    normalizar(`${c.nombre} ${c.zona} ${c.telefono} ${c.ruta || ''}`).includes(needle),
  );
}

function filtrarProductos(q = '') {
  const needle = normalizar(q);
  return productos.filter((p) =>
    normalizar(
      `${p.nombre} ${p.proveedor} ${p.alias || ''} ${p.codigo || ''} ${p.presentacion || ''} ${p.categoria || ''}`,
    ).includes(needle),
  );
}

function detalleProducto(p) {
  const partes = [p.proveedor];
  if (p.codigo) partes.push(`Código ${p.codigo}`);
  if (p.presentacion) partes.push(p.presentacion);
  if (p.alias) partes.push(`Alias: ${p.alias}`);
  if (Number(p.precio || 0) > 0) partes.push(`$${moneda(p.precio)}`);
  else partes.push('Precio pendiente');
  return partes.join(' · ');
}

function renderClientes(q = '') {
  const lista = filtrarClientes(q);
  $('#listaClientes').innerHTML = lista.length
    ? lista
        .map(
          (c) => `
          <div class="row">
            <div>
              <b>${esc(c.nombre)}</b>
              <div class="muted">${esc(c.zona || 'Sin zona')}${c.ruta ? ` · ${esc(c.ruta)}` : ''}${c.telefono ? ` · ${esc(c.telefono)}` : ''}</div>
            </div>
            <button type="button" data-action="borrar-cliente" data-id="${c.id}" aria-label="Borrar ${esc(c.nombre)}">×</button>
          </div>`,
        )
        .join('')
    : '<p class="muted">Sin resultados</p>';
}

function renderProductos(q = '') {
  const lista = filtrarProductos(q);
  $('#listaProductos').innerHTML = lista.length
    ? lista
        .map(
          (p) => `
          <div class="row">
            <div>
              <b>${esc(p.nombre)}</b>
              <div class="muted">${esc(detalleProducto(p))}</div>
            </div>
            <button type="button" data-action="borrar-producto" data-id="${p.id}" aria-label="Borrar ${esc(p.nombre)}">×</button>
          </div>`,
        )
        .join('')
    : '<p class="muted">Sin resultados</p>';
}

function renderPedidoClientes(q = '') {
  const lista = filtrarClientes(q);
  $('#pedidoClientes').innerHTML = lista.length
    ? lista
        .map(
          (c) => `
          <button type="button" class="row selectable ${clientePedido === c.id ? 'selected' : ''}" data-action="seleccionar-cliente" data-id="${c.id}">
            <div>
              <b>${esc(c.nombre)}</b>
              <div class="muted">${esc(c.zona || 'Sin zona')}${c.ruta ? ` · ${esc(c.ruta)}` : ''}</div>
            </div>
            <span aria-hidden="true">›</span>
          </button>`,
        )
        .join('')
    : '<p class="muted">No se encontró cliente</p>';
}

function renderPedidoProductos(q = '') {
  const lista = filtrarProductos(q);
  $('#pedidoProductos').innerHTML = lista.length
    ? lista
        .map(
          (p) => `
          <div class="row">
            <div>
              <b>${esc(p.nombre)}</b>
              <div class="muted">${esc(detalleProducto(p))}</div>
            </div>
            <button type="button" data-action="agregar-item" data-id="${p.id}">Agregar</button>
          </div>`,
        )
        .join('')
    : '<p class="muted">No se encontró producto</p>';
}

function renderPedido() {
  const cliente = clientes.find((c) => c.id === clientePedido);
  const total = itemsPedido.reduce((acc, item) => acc + Number(item.precio || 0) * Number(item.cantidad || 0), 0);

  const clienteHtml = cliente
    ? `<p><span class="badge">Cliente</span> <b>${esc(cliente.nombre)}</b></p>`
    : '<p class="muted">Seleccioná un cliente</p>';

  const itemsHtml = itemsPedido
    .map(
      (item) => `
      <div class="row">
        <div>
          <b>${esc(item.nombre)}</b>
          <div class="muted">${esc(item.proveedor)}${item.presentacion ? ` · ${esc(item.presentacion)}` : ''}${Number(item.precio || 0) > 0 ? ` · $${moneda(item.precio)}` : ''}</div>
        </div>
        <div class="qty-controls">
          <input data-action="cambiar-cantidad" data-id="${item.id}" type="number" min="1" step="1" value="${item.cantidad}" aria-label="Cantidad de ${esc(item.nombre)}">
          <button type="button" data-action="quitar-item" data-id="${item.id}" aria-label="Quitar ${esc(item.nombre)}">×</button>
        </div>
      </div>`,
    )
    .join('');

  $('#pedidoSeleccion').innerHTML = `${clienteHtml}${itemsHtml}<p class="pedido-total"><b>Total: $${moneda(total)}</b></p>`;
}

function renderPedidos() {
  $('#listaPedidos').innerHTML = pedidos.length
    ? pedidos
        .slice()
        .reverse()
        .map((p) => {
          const fecha = p.fecha ? new Date(p.fecha).toLocaleString('es-AR') : '';
          return `
          <div class="row">
            <div>
              <b>${esc(p.cliente)}</b>
              <div class="muted">${esc(fecha)} · ${p.items?.length || 0} ítems · deuda $${moneda(p.deuda)}</div>
            </div>
            <b>$${moneda(p.total)}</b>
          </div>`;
        })
        .join('')
    : '<p class="muted">Todavía no hay pedidos</p>';
}

function refrescarPantallas() {
  renderClientes($('#buscarCliente')?.value || '');
  renderProductos($('#buscarProducto')?.value || '');
  renderPedidoClientes($('#pedidoClienteBuscar')?.value || '');
  renderPedidoProductos($('#pedidoProductoBuscar')?.value || '');
  renderPedido();
  renderPedidos();
}

$('#clienteForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = $('#clienteNombre').value.trim();
  if (!nombre) return;

  clientes.push({
    id: Date.now(),
    nombre,
    zona: $('#clienteZona').value.trim(),
    telefono: $('#clienteTelefono').value.trim(),
    ruta: '',
    deuda: 0,
    notas: '',
  });
  store.set('clientes', clientes);
  e.currentTarget.reset();
  $('#buscarCliente').value = '';
  refrescarPantallas();
});

$('#productoForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = $('#productoNombre').value.trim();
  if (!nombre) return;

  productos.push({
    id: Date.now(),
    nombre,
    proveedor: $('#productoProveedor').value,
    precio: Number($('#productoPrecio').value || 0),
    costo: 0,
    alias: '',
    codigo: '',
    presentacion: '',
    categoria: '',
  });
  store.set('productos', productos);
  e.currentTarget.reset();
  $('#buscarProducto').value = '';
  refrescarPantallas();
});

$('#buscarCliente').addEventListener('input', (e) => renderClientes(e.target.value));
$('#buscarProducto').addEventListener('input', (e) => renderProductos(e.target.value));
$('#pedidoClienteBuscar').addEventListener('input', (e) => renderPedidoClientes(e.target.value));
$('#pedidoProductoBuscar').addEventListener('input', (e) => renderPedidoProductos(e.target.value));

$('#listaClientes').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-action="borrar-cliente"]');
  if (!btn) return;
  const id = Number(btn.dataset.id);
  clientes = clientes.filter((c) => c.id !== id);
  if (clientePedido === id) clientePedido = null;
  store.set('clientes', clientes);
  refrescarPantallas();
});

$('#listaProductos').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-action="borrar-producto"]');
  if (!btn) return;
  const id = Number(btn.dataset.id);
  productos = productos.filter((p) => p.id !== id);
  itemsPedido = itemsPedido.filter((p) => p.id !== id);
  store.set('productos', productos);
  refrescarPantallas();
});

$('#pedidoClientes').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-action="seleccionar-cliente"]');
  if (!btn) return;
  clientePedido = Number(btn.dataset.id);
  renderPedidoClientes($('#pedidoClienteBuscar').value);
  renderPedido();
});

$('#pedidoProductos').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-action="agregar-item"]');
  if (!btn) return;
  const id = Number(btn.dataset.id);
  const producto = productos.find((p) => p.id === id);
  if (!producto) return;
  const existente = itemsPedido.find((item) => item.id === id);
  if (existente) existente.cantidad += 1;
  else itemsPedido.push({ ...producto, cantidad: 1 });
  renderPedido();
});

$('#pedidoSeleccion').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-action="quitar-item"]');
  if (!btn) return;
  const id = Number(btn.dataset.id);
  itemsPedido = itemsPedido.filter((item) => item.id !== id);
  renderPedido();
});

$('#pedidoSeleccion').addEventListener('change', (e) => {
  const input = e.target.closest('[data-action="cambiar-cantidad"]');
  if (!input) return;
  const id = Number(input.dataset.id);
  const item = itemsPedido.find((i) => i.id === id);
  if (!item) return;
  item.cantidad = Math.max(1, Math.floor(Number(input.value) || 1));
  renderPedido();
});

$('#guardarPedido').addEventListener('click', () => {
  if (!clientePedido) return alert('Seleccioná un cliente');
  if (!itemsPedido.length) return alert('Agregá al menos un producto');

  const cliente = clientes.find((c) => c.id === clientePedido);
  if (!cliente) return alert('El cliente seleccionado ya no existe');

  const total = itemsPedido.reduce((acc, item) => acc + Number(item.precio || 0) * Number(item.cantidad || 0), 0);
  const deuda = Math.max(0, Number($('#deudaAnterior').value || 0));

  pedidos.push({
    id: Date.now(),
    fecha: new Date().toISOString(),
    cliente: cliente.nombre,
    clienteId: cliente.id,
    items: itemsPedido.map((item) => ({ ...item })),
    total,
    deuda,
  });
  store.set('pedidos', pedidos);

  itemsPedido = [];
  clientePedido = null;
  $('#deudaAnterior').value = 0;
  $('#pedidoClienteBuscar').value = '';
  $('#pedidoProductoBuscar').value = '';
  refrescarPantallas();
  alert('Pedido guardado');
});

refrescarPantallas();
