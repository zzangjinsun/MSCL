NDSummary.OnToolTipsLoaded("File:MicroStrain/MIP/MipDataPoint.h",{1942:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1942\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipDataPoint</div></div></div><div class=\"TTSummary\">Represents a single Inertial Data Point (Extends from DataPoint)</div></div>",1944:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1944\" class=\"NDPrototype NoParameterForm\">MipDataPoint()</div><div class=\"TTSummary\">Creates a MipDataPoint object with default, unknown, values</div></div>",1945:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1945\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipDataPoint(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">ChannelField&nbsp;</td><td class=\"PName last\">field,</td></tr><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">ChannelQualifier&nbsp;</td><td class=\"PName last\">qualifier,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">ValueType&nbsp;</td><td class=\"PName last\">storedAsType,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">anyType&nbsp;</td><td class=\"PName last\">value,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">valid</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a MipDataPoint object</div></div>",1947:"<div class=\"NDToolTip TVariable LC\"><div class=\"TTSummary\">The MipTypes::ChannelField of the data point.</div></div>",1948:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1948\" class=\"NDPrototype NoParameterForm\">MipTypes::ChannelQualifier m_qualifier</div><div class=\"TTSummary\">The MipTypes::ChannelQualifier of the data point.</div></div>",1949:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1949\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_valid</div><div class=\"TTSummary\">Whether the data point is valid(true) or invalid(false)</div></div>",1951:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1951\" class=\"NDPrototype NoParameterForm\">MipTypes::ChannelField field() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Channel Field that describes the full MIP &quot;Field&quot; that the data point came in.&nbsp; This is a combination of a MIP &quot;Descriptor ID&quot;, and a MIP &quot;Field ID&quot;.</div></div>",1952:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1952\" class=\"NDPrototype NoParameterForm\">MipTypes::ChannelQualifier qualifier() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Channel Qualifier that describes the specific channel for the data point.&nbsp; This, combined with the MipTypes::ChannelField, is a fully unique identifier for the channel.</div></div>",1953:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1953\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> valid() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether the data point is flagged as valid(true) or invalid(false)</div></div>",1954:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1954\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> channelName() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the name of the channel.&nbsp; This is the universal channel name that should be used for uploading to SensorCloud.</div></div>",1956:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a vector of MipDataPoint objects</div></div>"});