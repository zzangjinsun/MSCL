NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Configuration/InputRange.h",{3409:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">struct for Input Range options that specify an input range and associated gain for a channel</div></div>",3411:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3411\" class=\"NDPrototype NoParameterForm\">WirelessTypes::InputRange inputRange</div><div class=\"TTSummary\">The WirelessTypes::InputRange enum value for the input voltage range</div></div>",3412:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3412\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasGain</div><div class=\"TTSummary\">bool indicating whether or not this input range option has a valid associated gain</div></div>",3413:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3413\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> gain</div><div class=\"TTSummary\">the gain for this input range</div></div>",3415:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3415\" class=\"NDPrototype NoParameterForm\">InputRangeEntry() : inputRange(WirelessTypes::range_invalid), hasGain(<span class=\"SHKeyword\">false</span>), gain(<span class=\"SHNumber\">0</span>)</div><div class=\"TTSummary\">creates an InputRangeEntry with inputRange = range_invalid, hasGain = false, and gain = 0</div></div>",3416:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3416\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">InputRangeEntry(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">InputRange&nbsp;</td><td class=\"PName last\">ir</td></tr></table></td><td class=\"PAfterParameters\">) : inputRange(ir), hasGain(<span class=\"SHKeyword\">false</span>), gain(<span class=\"SHNumber\">0</span>)</td></tr></table></div><div class=\"TTSummary\">creates an InputRangeEntry with inputRange = ir, hasGain = false and gain = 0</div></div>",3417:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3417\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">InputRangeEntry(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">InputRange&nbsp;</td><td class=\"PName last\">ir,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">g</td></tr></table></td><td class=\"PAfterParameters\">) : inputRange(ir), hasGain(<span class=\"SHKeyword\">true</span>), gain(g)</td></tr></table></div><div class=\"TTSummary\">creates an InputRangeEntry with inputRange = ir, hasGain = true and gain = g</div></div>",3419:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A vector of InputRangeEntry objects.</div></div>",3420:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3420\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">InputRangeHelper</div></div></div><div class=\"TTSummary\">Contains functions specific to input range for Wireless Nodes.</div></div>",3422:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">typedef for a map of uint16 eeprom values to WirelessTypes::InputRange values.</div></div>",3424:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3424\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static const</span> InputRangeMap&amp; getRangeMap(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessModels::</td><td class=\"PType\">NodeModel&nbsp;</td><td class=\"PName\">nodeType,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">ChannelType&nbsp;</td><td class=\"PName\">channelType,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">Voltage&nbsp;</td><td class=\"PName\">excitationVoltage&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">static_cast&lt;WirelessTypes::Voltage&gt;(<span class=\"SHNumber\">0</span>)</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the InputRangeMap for the specified node and channel type.</div></div>",3425:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3425\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static uint16</span> inputRangeToEepromVal(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">InputRange&nbsp;</td><td class=\"PName last\">range,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessModels::</td><td class=\"PType\">NodeModel&nbsp;</td><td class=\"PName last\">nodeType,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">ChannelType&nbsp;</td><td class=\"PName last\">channelType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Converts a WirelessTypes::InputRange to the eeprom value that corresponds to it.</div></div>",3426:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3426\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static uint16</span> inputRangeToEepromVal(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">InputRange&nbsp;</td><td class=\"PName last\">range,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessModels::</td><td class=\"PType\">NodeModel&nbsp;</td><td class=\"PName last\">nodeType,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">ChannelType&nbsp;</td><td class=\"PName last\">channelType,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">Voltage&nbsp;</td><td class=\"PName last\">excitationVoltage</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Converts a WirelessTypes::InputRange to the eeprom value that corresponds to it, given the excitation voltage.</div></div>",3427:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3427\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> WirelessTypes::InputRange eepromValToInputRange(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">eepromValue,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessModels::</td><td class=\"PType\">NodeModel&nbsp;</td><td class=\"PName last\">nodeType,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">ChannelType&nbsp;</td><td class=\"PName last\">channelType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Converts an eeprom value to the corresponding WirelessTypes::InputRange.</div></div>",3428:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3428\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> WirelessTypes::InputRange eepromValToInputRange(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">eepromValue,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessModels::</td><td class=\"PType\">NodeModel&nbsp;</td><td class=\"PName last\">nodeType,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">ChannelType&nbsp;</td><td class=\"PName last\">channelType,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">Voltage&nbsp;</td><td class=\"PName last\">excitationVoltage</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Converts an eeprom value to the corresponding WirelessTypes::InputRange, given the excitation voltage.</div></div>",3429:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3429\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static void</span> getRangeVector(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessModels::</td><td class=\"PType\">NodeModel&nbsp;</td><td></td><td class=\"PName last\">nodeType,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">ChannelType&nbsp;</td><td></td><td class=\"PName last\">channelType,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">InputRanges&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">result</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets a WirelessTypes::InputRanges container for the provided node type and channel type.</div></div>",3430:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3430\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static void</span> getRangeVector(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessModels::</td><td class=\"PType\">NodeModel&nbsp;</td><td></td><td class=\"PName last\">nodeType,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">ChannelType&nbsp;</td><td></td><td class=\"PName last\">channelType,</td></tr><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">Voltage&nbsp;</td><td></td><td class=\"PName last\">excitationVoltage,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">InputRanges&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">result</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets a WirelessTypes::InputRanges container for the provided node type, channel type, and excitation voltage.</div></div>"});