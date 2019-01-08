NDSummary.OnToolTipsLoaded("File:MicroStrain/MIP/Packets/MipFieldParser.h",{1860:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a map of MipTypes::ChannelField / MipFieldParser pairs</div></div>",1861:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1861\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipFieldParser</div></div></div><div class=\"TTSummary\">Base Class parser for parsing Mip Data Fields</div></div>",1863:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1863\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> parse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipDataField&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">field,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">MipDataPoints&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">result</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></td></tr></table></div><div class=\"TTSummary\">Parses an MipDataField for MipDataPoints and stores them in the result vector</div></div>",1864:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1864\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static void</span> parseField(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipDataField&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">field,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">MipDataPoints&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">result</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">The static parse function to call that looks through the parser map and parses the field with the correct parser</div></div>",1865:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1865\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> ParserMap&amp; getParserMap()</div><div class=\"TTSummary\">Gets the static parser map that contains all the registered parsing classes</div></div>",1866:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1866\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> registerParser(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">ChannelField&nbsp;</td><td></td><td class=\"PName last\">field,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">MipFieldParser&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">parser</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Registers an MipFieldParser with a MipTypes::ChannelField.</div></div>",1867:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1867\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static bool</span> pointIsValid(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">allFlags,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">flagPos</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks if the flag position for a Mip Data Point is valid given the full flags value</div></div>"});