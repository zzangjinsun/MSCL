NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Features/FlashInfo.h",{4137:"<div class=\"NDToolTip TStruct LC\"><div class=\"TTSummary\">Contains flash information of a WirelessNode.</div></div>",4139:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4139\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> storageSize</div><div class=\"TTSummary\">The total storage size, in bytes.</div></div>",4140:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4140\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> blockSize</div><div class=\"TTSummary\">The size of a datalogging Block, in bytes.</div></div>",4141:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4141\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> pageSize</div><div class=\"TTSummary\">The size of a datalogging Page, in bytes.</div></div>",4142:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4142\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> maxBandwidth</div><div class=\"TTSummary\">The max flash bandwidth (bytes per second) that is supported for logging.</div></div>",4144:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4144\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">FlashInfo(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">storage,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">block,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">page,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">bandwidth</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a FlashInfo object.</div></div>",4145:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4145\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> FlashInfo FLASH_SST25VF032B()</div><div class=\"TTSummary\">Static function to create a FlashInfo object for the SST25VF032B Flash.</div></div>",4146:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4146\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static</span> FlashInfo FLASH_IS25WP128()</div><div class=\"TTSummary\">Static function to create a FlashInfo object for the IS25WP128 Flash.</div></div>",4147:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4147\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> FlashInfo FROM_FLASH_ID(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">flashId</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Static function to create a FlashInfo object from the given flash ID from eeprom.</div></div>"});