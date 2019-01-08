NDSummary.OnToolTipsLoaded("CClass:WirelessPacket",{4304:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4304\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WirelessPacket</div></div></div><div class=\"TTSummary\">Represents a MicroStrain wireless packet</div></div>",4306:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">typedef for the bytes that make up a payload in a packet</div></div>",4355:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The possible ASPP versions</div></div>",4359:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Possible error codes from response packets.</div></div>",4366:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4366\" class=\"NDPrototype NoParameterForm\">WirelessPacket()</div><div class=\"TTSummary\">The default constructor for a wireless packet</div></div>",4367:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4367\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static void</span> throwEepromResponseError(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ResponseErrorCode&nbsp;</td><td class=\"PName last\">errorCode,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Throws an exception based on a ResponseErrorCode from a read/write eeprom command.&nbsp; Not all error codes will cause an exception.</div></div>",4369:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4369\" class=\"NDPrototype NoParameterForm\">AsppVersion m_asppVersion</div><div class=\"TTSummary\">The AsppVersion for the packet.</div></div>",4370:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4370\" class=\"NDPrototype NoParameterForm\">DeliveryStopFlags m_deliveryStopFlags</div><div class=\"TTSummary\">The delivery stop flags of the packet</div></div>",4371:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4371\" class=\"NDPrototype NoParameterForm\">PacketType m_type</div><div class=\"TTSummary\">The packet type of the packet</div></div>",4372:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4372\" class=\"NDPrototype NoParameterForm\">NodeAddress m_nodeAddress</div><div class=\"TTSummary\">The node address in the packet</div></div>",4373:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4373\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> m_nodeRSSI</div><div class=\"TTSummary\">The node received signal strength indicator (strength of which the node received the command from the base station).&nbsp; This value will be set to -200 if the packet contains a legacy junk lqi byte that should be thrown out.</div></div>",4374:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4374\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> m_baseRSSI</div><div class=\"TTSummary\">The base received signal strength indicator (strength of which the base station received the response from the node).</div></div>",4375:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4375\" class=\"NDPrototype NoParameterForm\">WirelessTypes::Frequency m_frequency</div><div class=\"TTSummary\">The WirelessTypes::Frequency that this packet was collected on.</div></div>",4376:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4376\" class=\"NDPrototype NoParameterForm\">Payload m_payload</div><div class=\"TTSummary\">The payload bytes in the packet</div></div>",4378:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4378\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> isDataPacket() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether or not the packet is a Data packet.</div></div>",4379:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4379\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> isDiscoveryPacket() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether or not the packet is a Node Discovery packet.</div></div>",4380:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4380\" class=\"NDPrototype NoParameterForm\">AsppVersion asppVersion() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the ASPP version of the packet.</div></div>",4381:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4381\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> asppVersion(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">AsppVersion&nbsp;</td><td class=\"PName last\">ver</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the ASPP version of the packet.</div></div>",4382:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4382\" class=\"NDPrototype NoParameterForm\">DeliveryStopFlags deliveryStopFlags() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the delivery stop flags for the packet</div></div>",4383:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4383\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> deliveryStopFlags(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DeliveryStopFlags&nbsp;</td><td class=\"PName last\">flags</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the delivery stop flags to the passed in flags</div></div>",4384:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4384\" class=\"NDPrototype NoParameterForm\">PacketType type() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the packet type of the packet</div></div>",4385:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4385\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> type(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">PacketType&nbsp;</td><td class=\"PName last\">packetType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the packet type of the packet</div></div>",4386:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4386\" class=\"NDPrototype NoParameterForm\">NodeAddress nodeAddress() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the node address of the packet</div></div>",4387:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4387\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> nodeAddress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">address</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the node address of the packet</div></div>",4388:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4388\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> nodeRSSI() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the node RSSI of the packet</div></div>",4389:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4389\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> nodeRSSI(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">rssi</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the node RSSI of the packet</div></div>",4390:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4390\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> baseRSSI() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the base station RSSI of the packet</div></div>",4391:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4391\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> baseRSSI(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">rssi</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the base station RSSI of the packet</div></div>",4392:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4392\" class=\"NDPrototype NoParameterForm\">WirelessTypes::Frequency frequency() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::Frequency that the packet was collected on</div></div>",4393:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4393\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> frequency(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">Frequency&nbsp;</td><td class=\"PName last\">freq</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the WirelessTypes::Frequency that the packet was collected on</div></div>",4394:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4394\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Payload&amp; payload() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the payload bytes of the packet</div></div>",4395:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4395\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> payload(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">bytes</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the payload bytes of the packet</div></div>"});