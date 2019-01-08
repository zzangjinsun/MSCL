NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Commands/UARTBaudRate.h",{319:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype319\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">UARTBaudRate</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial UARTBaudRate command.</div></div>",321:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype321\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",322:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype322\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> UARTBaudRate MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">dataToUse</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: dataToUse The uint32 object to set.</div></div>",323:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype323\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> UARTBaudRate MakeGetCommand()</div></div>",324:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype324\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static uint32</span> getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",325:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype325\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",326:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates a UARTBaudRate object.&nbsp; Use Make___Command methods to create an object.</div></div>",327:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype327\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",328:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype328\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",329:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype329\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>",331:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype331\" class=\"NDPrototype NoParameterForm\">MipTypes::FunctionSelector m_functionSelector</div><div class=\"TTSummary\">The FunctionSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>",332:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype332\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_baudRate</div><div class=\"TTSummary\">The uint32 to send to the device.</div></div>"});