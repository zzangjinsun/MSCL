NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Commands/GNSS_AssistedFixControl.h",{550:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype550\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">GNSS_AssistedFixControl</div></div></div><div class=\"TTSummary\">Contains the logic for the Inertial GNSS Assist Fix Control command.</div></div>",555:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype555\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_get()</div><div class=\"TTSummary\">Builds the bytes for the &quot;get&quot; command.</div></div>",556:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype556\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand_set(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enableAssistedFix</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the bytes for the &quot;set&quot; command.</div></div>",557:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype557\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Response</div></div></div><div class=\"TTSummary\">Handles the response to the GNSS Assisted Fix Control command.</div></div>",559:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype559\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const override</span></div><div class=\"TTSummary\">Gets the data field descriptor byte</div></div>",560:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype560\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Response(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td class=\"PName last\">collector,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">ackNackExpected,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">dataResponseExpected</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a GNSS Assisted Fix Control Response object</div></div>",561:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype561\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> parseResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Parses the response, getting the data rate base result</div></div>"});