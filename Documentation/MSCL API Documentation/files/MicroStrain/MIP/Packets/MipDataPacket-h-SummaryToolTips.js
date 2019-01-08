NDSummary.OnToolTipsLoaded("File:MicroStrain/MIP/Packets/MipDataPacket.h",{336:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype336\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MipDataPacket</div></div></div><div class=\"TTSummary\">A Mip Data Packet that contains both valid and invalid data from a MIP Device.</div></div>",337:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype337\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> MipDataPoints&amp; data() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets all the MipDataPoints that are contained within this packet</div></div>",338:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype338\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Timestamp&amp; collectedTimestamp() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Timestamp representing when the packet was collected by MSCL.</div></div>",339:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype339\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Timestamp&amp; utcTimestamp() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the UTC Timestamp which was transmitted in the Mip Data Packet as a channel field.&nbsp; Note: This will return a Timestamp of 0 if utcTimeValid returns false.</div></div>",340:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype340\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> utcTimeValid() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Whether the UTC Timestamp returned from the device is valid or not.</div></div>",341:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype341\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> utcTimeFlags() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the UTC timestamp flags that were transmitted in the Mip Data Packet.&nbsp; Note: This will return 0 if utcTimeValid returns false.</div></div>",342:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a vector of MipDataPacket objects.</div></div>"});