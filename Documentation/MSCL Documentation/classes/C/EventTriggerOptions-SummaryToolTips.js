NDSummary.OnToolTipsLoaded("CClass:EventTriggerOptions",{3446:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3446\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">EventTriggerOptions</div></div></div><div class=\"TTSummary\">Contains all of the Event Trigger options that can be configured for a WirelessNode.</div></div>",3448:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3448\" class=\"NDPrototype NoParameterForm\">BitMask m_triggerMask</div><div class=\"TTSummary\">The BitMask for enabling and disabling triggers.</div></div>",3449:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3449\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_preDuration</div><div class=\"TTSummary\">The pre event duration (in milliseconds).</div></div>",3450:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3450\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_postDuration</div><div class=\"TTSummary\">The post event duration ( in milliseconds).</div></div>",3451:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3451\" class=\"NDPrototype NoParameterForm\">Triggers m_triggers</div><div class=\"TTSummary\">The Triggers.</div></div>",3453:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3453\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> BitMask&amp; triggerMask() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the actual BitMask that represents the active and inactive triggers.</div></div>",3454:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3454\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> triggerMask(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BitMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the BitMask that represents the active and inactive triggers.</div></div>",3455:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3455\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> anyTriggersEnabled() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks if any triggers are enabled.</div></div>",3456:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3456\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> triggerEnabled(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">triggerIndex</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks if a specific trigger is enabled.</div></div>",3457:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3457\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> enableTrigger(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName\">triggerIndex,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">enable&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">true</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Enables or disables a specific trigger.</div></div>",3458:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3458\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> preDuration() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the pre event duration in milliseconds.</div></div>",3459:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3459\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> preDuration(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">duration</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the pre event duration in milliseconds.</div></div>",3460:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3460\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> postDuration() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the post event duration in milliseconds.</div></div>",3461:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3461\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> postDuration(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">duration</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the post event duration in milliseconds.</div></div>",3462:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3462\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> trigger(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName last\">triggerIndex,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Trigger&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">trigger</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the Trigger in this options object, for the trigger trigger index.</div></div>",3463:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3463\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> Trigger&amp; trigger(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">triggerIndex</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the Trigger for the given trigger index.</div></div>",3464:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3464\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Triggers&amp; triggers() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Triggers that are currently set in this object.</div></div>"});