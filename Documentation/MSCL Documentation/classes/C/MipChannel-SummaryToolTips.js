NDSummary.OnToolTipsLoaded("CClass:MipChannel",{2251:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2251\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipChannel</div></div></div><div class=\"TTSummary\">Represents a single &quot;channel&quot; or data descriptors that can make up an Inertial Device\'s message format</div></div>",2253:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2253\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">MipChannel(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">ChannelField&nbsp;</td><td></td><td class=\"PName last\">channelField,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SampleRate&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">sampleRate</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a MipChannel object.</div></div>",2255:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2255\" class=\"NDPrototype NoParameterForm\">MipTypes::ChannelField m_channelField</div><div class=\"TTSummary\">The MipTypes::ChannelField for this channel.</div></div>",2256:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2256\" class=\"NDPrototype NoParameterForm\">SampleRate m_sampleRate</div><div class=\"TTSummary\">The SampleRate of the inertial channel.</div></div>",2258:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2258\" class=\"NDPrototype NoParameterForm\">MipTypes::ChannelField channelField() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the MipTypes::ChannelField for this channel.</div></div>",2259:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2259\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> SampleRate&amp; sampleRate() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the SampleRate set for this channel.</div></div>",2260:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2260\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint16</span> rateDecimation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">sampleRateBase</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the rate decimation that is used to determine the sample rate (sample rate = sampleratebase / rate decimation).</div></div>",2261:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2261\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> SampleRate&amp; validateSampleRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">sampleRateBase</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Validates the sample rate of the MipChannel object, updating it to a supported rate if necessary.&nbsp; This function will be called before a MipChannel is set on the InertialNode.&nbsp; You can call it yourself if you want to update the channel yourself to determine the true SampleRate that will be applied.</div></div>",2262:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2262\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> SampleRate&amp; validateSampleRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">InertialNode&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">node</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Validates the sample rate of the MipChannel object, updating it to a supported rate if necessary.&nbsp; This function will be called before a MipChannel is set on the InertialNode.&nbsp; You can call it yourself if you want to update the channel yourself to determine the true SampleRate that will be applied.</div></div>",2263:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2263\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> fieldDescriptor() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the field descriptor byte of the Inertial Channel.</div></div>",2264:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2264\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> descriptorSet() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the descriptor set byte of the Inertial Channel.</div></div>",2266:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">typedef for a vector of MipChannel objects</div></div>"});