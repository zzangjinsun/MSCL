NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Configuration/BaseStationEepromHelper.h",{3912:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3912\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BaseStationEepromHelper</div></div></div><div class=\"TTSummary\">A helper class for reading and writing to a BaseStation\'s Eeprom.&nbsp; This class provides eeprom specific parsing so that high-level objects can be converted to their low-level eeprom value equivelent and vice-versa.</div></div>",3914:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3914\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">BaseStationEepromHelper(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">BaseStation_Impl&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">basestation</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a BaseStationEepromHelper object with a BaseStation.</div></div>",3915:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3915\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> checkAnalogPairingSupported() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks that analog pairing is supported and throws an exception if it isn\'t.</div></div>",3917:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3917\" class=\"NDPrototype NoParameterForm\">BaseStation_Impl* m_baseStation</div><div class=\"TTSummary\">The BaseStation_Impl used by this eeprom helper.</div></div>",3919:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3919\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Version read_asppVersion(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">CommProtocol&nbsp;</td><td class=\"PName last\">commProtocol</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the ASPP Version of the BaseStation.</div></div>",3920:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3920\" class=\"NDPrototype NoParameterForm\">WirelessTypes::CommProtocol read_commProtocol() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::CommProtocol of the BaseStation.</div></div>",3921:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3921\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> write_commProtocol(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">CommProtocol&nbsp;</td><td class=\"PName last\">commProtocol</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Changes the WirelessTypes::CommProtocol of the BaseStation.</div></div>",3922:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3922\" class=\"NDPrototype NoParameterForm\">Version read_fwVersion() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the firmware Version of the BaseStation.</div></div>",3923:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3923\" class=\"NDPrototype NoParameterForm\">WirelessModels::BaseModel read_model() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the WirelessModels::BaseModel of the BaseStation.</div></div>",3924:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3924\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> read_serial() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the serial of the BaseStation.</div></div>",3925:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3925\" class=\"NDPrototype NoParameterForm\">WirelessTypes::MicroControllerType read_microcontroller() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the WirelessTypes::MicroControllerType of the BaseStation.</div></div>",3926:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3926\" class=\"NDPrototype NoParameterForm\">WirelessTypes::TransmitPower read_transmitPower() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the WirelessTypes::TransmitPower that is currently set on the BaseStation.</div></div>",3927:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3927\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> write_transmitPower(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">TransmitPower&nbsp;</td><td class=\"PName last\">power</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the WirelessTypes::TransmitPower to the BaseStation.</div></div>",3928:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3928\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">BaseStationButton read_button(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">buttonNumber,</td></tr><tr><td class=\"PModifierQualifier first\">BaseStationButton::</td><td class=\"PType\">UserAction&nbsp;</td><td class=\"PName last\">action</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the current settings for a particular button and action as a BaseStationButton.</div></div>",3929:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3929\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> write_button(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName last\">buttonNumber,</td></tr><tr><td class=\"PModifierQualifier first\">BaseStationButton::</td><td class=\"PType\">UserAction&nbsp;</td><td></td><td class=\"PName last\">action,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStationButton&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">btn</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the BaseStationButton to the BaseStation for a particular button and action.</div></div>",3930:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3930\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> read_analogPairingEnabled() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the setting for if analog pairing is enabled.</div></div>",3931:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3931\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> write_analogPairingEnabled(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the analog pairing enable setting to the BaseStation.</div></div>",3932:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3932\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> read_analogTimeoutTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the analog timeout time in seconds.</div></div>",3933:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3933\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> write_analogTimeoutTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">seconds</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the analog timeout time to the BaseStation.</div></div>",3934:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3934\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> read_analogTimeoutVoltage() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the analog timeout voltage.</div></div>",3935:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3935\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> write_analogTimeoutVoltage(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">voltage</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the analog timeout voltage to the BaseStation.</div></div>",3936:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3936\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> read_analogExceedanceEnabled() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the setting for if analog exceedance is enabled.</div></div>",3937:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3937\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> write_analogExceedanceEnabled(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the analog exceedance enable setting to the BaseStation.</div></div>",3938:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3938\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">BaseStationAnalogPair read_analogPair(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">portNumber</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the current settings for a particular analog pairing as a BaseStationAnalogPair.</div></div>",3939:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3939\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> write_analogPair(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName last\">portNumber,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStationAnalogPair&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">pair</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the BaseStationAnalogPair to the BaseStation for a particular port number.</div></div>",3940:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3940\" class=\"NDPrototype NoParameterForm\">WirelessTypes::RegionCode read_regionCode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the region code from the BaseStation.</div></div>"});