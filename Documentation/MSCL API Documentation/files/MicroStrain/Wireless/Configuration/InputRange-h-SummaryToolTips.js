NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Configuration/InputRange.h",{714:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">struct for Input Range options that specify an input range and associated gain for a channel</div></div>",715:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype715\" class=\"NDPrototype NoParameterForm\">WirelessTypes::InputRange inputRange</div><div class=\"TTSummary\">The WirelessTypes::InputRange enum value for the input voltage range</div></div>",716:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype716\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasGain</div><div class=\"TTSummary\">bool indicating whether or not this input range option has a valid associated gain</div></div>",717:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype717\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> gain</div><div class=\"TTSummary\">the gain for this input range</div></div>",718:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype718\" class=\"NDPrototype NoParameterForm\">InputRangeEntry() : inputRange(WirelessTypes::range_invalid), hasGain(<span class=\"SHKeyword\">false</span>), gain(<span class=\"SHNumber\">0</span>)</div><div class=\"TTSummary\">creates an InputRangeEntry with inputRange = range_invalid, hasGain = false, and gain = 0</div></div>",719:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype719\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">InputRangeEntry(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">InputRange&nbsp;</td><td class=\"PName last\">ir</td></tr></table></td><td class=\"PAfterParameters\">) : inputRange(ir), hasGain(<span class=\"SHKeyword\">false</span>), gain(<span class=\"SHNumber\">0</span>)</td></tr></table></div><div class=\"TTSummary\">creates an InputRangeEntry with inputRange = ir, hasGain = false and gain = 0</div></div>",720:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype720\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">InputRangeEntry(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">InputRange&nbsp;</td><td class=\"PName last\">ir,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">g</td></tr></table></td><td class=\"PAfterParameters\">) : inputRange(ir), hasGain(<span class=\"SHKeyword\">true</span>), gain(g)</td></tr></table></div><div class=\"TTSummary\">creates an InputRangeEntry with inputRange = ir, hasGain = true and gain = g</div></div>",721:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A vector of InputRangeEntry objects.</div></div>"});