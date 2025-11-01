Blockly.Python['import_mc'] = function(block) {
    var code = 'from mcpi.minecraft import Minecraft\n';
    return code;
};

Blockly.Python['music_init'] = function(block) {
    var music = Blockly.Python.nameDB_.getName(block.getFieldValue('music'), Blockly.VARIABLE_CATEGORY_NAME);
    var code = `${music} = Music()\n`;
    return code;
};

Blockly.Python['music_get_song'] = function(block) {
    var music = Blockly.Python.nameDB_.getName(block.getFieldValue('music'), Blockly.VARIABLE_CATEGORY_NAME);
    var parameters = Blockly.Python.valueToCode(block, 'parameters', 0);
    var code = `${music}.get_song(${parameters})`;
    return [code, 0];
};

Blockly.Python['music_get_song'] = function(block) {
    var song = Blockly.Python.nameDB_.getName(block.getFieldValue('song'), Blockly.VARIABLE_CATEGORY_NAME);
    var music = Blockly.Python.nameDB_.getName(block.getFieldValue('music'), Blockly.VARIABLE_CATEGORY_NAME);
    var parameters = Blockly.Python.valueToCode(block, 'parameters', 0);
    var code = `${song} = ${music}.get_song(${parameters})\n`;
    return code;
};  

Blockly.Python['music_play_song'] = function(block) {
    var song = Blockly.Python.nameDB_.getName(block.getFieldValue('song'), Blockly.VARIABLE_CATEGORY_NAME);
    var code = `${song}.play()\n`;
    return code;
};  

Blockly.Python['music_get_feature'] = function(block) {
    var song = Blockly.Python.nameDB_.getName(block.getFieldValue('song'), Blockly.VARIABLE_CATEGORY_NAME);
    var feature = block.getFieldValue('feature');
    var code = `${song}.${feature}`;
    return [code, 0];
};  