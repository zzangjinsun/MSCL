NDSummary.OnToolTipsLoaded("CClass:NodeCommTimes",{6419:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6419\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeCommTimes</div></div></div><div class=\"TTSummary\">Contains a global map of Wireless Node addresses to last communication times.</div></div>",6421:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6421\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> std::map&lt;NodeAddress, Timestamp&gt; m_nodesLastCommTime</div><div class=\"TTSummary\">A map of node address to Timestamp objects, holding the last communication time for nodes.</div></div>",6422:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6422\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> std::map&lt;NodeAddress, DeviceState&gt; m_nodesLastState</div><div class=\"TTSummary\">A mpa of node address to DeviceState objects, holding the last known state for nodes.</div></div>",6424:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6424\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static void</span> updateCommTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the communication time for the given node address to the current system time.</div></div>",6425:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6425\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static void</span> updateDeviceState(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PType first\">DeviceState&nbsp;</td><td class=\"PName last\">state</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the DeviceState for the given node address.</div></div>",6426:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6426\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static const</span> Timestamp&amp; getLastCommTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the last communication time for the given node address.</div></div>",6427:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6427\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> DeviceState getLastDeviceState(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the last device state for the given node address.</div></div>"});