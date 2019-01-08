NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Commands/MagnetometerHardIronOffset.h",{481:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype481\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MagnetometerHardIronOffset</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial MagnetometerHardIronOffset command.</div></div>",483:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype483\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",484:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype484\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> MagnetometerHardIronOffset MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">GeometricVector&nbsp;</td><td class=\"PName last\">offsetVector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: offsetVector The GeometricVector object to set.</div></div>",485:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype485\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> MagnetometerHardIronOffset MakeGetCommand()</div></div>",486:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype486\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> GeometricVector getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",487:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype487\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",488:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates a MagnetometerHardIronOffset object.&nbsp; Use Make___Command methods to create an object.</div></div>",489:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype489\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",490:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype490\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",491:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype491\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>",493:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype493\" class=\"NDPrototype NoParameterForm\">MipTypes::FunctionSelector m_functionSelector</div><div class=\"TTSummary\">The FunctionSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>",494:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype494\" class=\"NDPrototype NoParameterForm\">GeometricVector m_offsetVector</div><div class=\"TTSummary\">The MagnetometerHardIronOffsetData to send to the device.</div></div>"});