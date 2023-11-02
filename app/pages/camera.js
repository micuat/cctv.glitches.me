import html from "choo/html";

// export module
export default function(state, emit) {
  return html`
  <div class="bodyBg" topmargin="0" leftmargin="15" marginwidth="0" marginheight="0"
  onload="langObjView.init();DrawTB('no', '/jpg/video.jpg', '1', '1', 'no', 'no', 'true', getStreamProfileNbr());dynamicResize();"
  onresize="dynamicResize();">

  <form name="profileForm"><input type="hidden" name="root_StreamProfile_MaxGroups" value="20"><input type="hidden"
      name="root_StreamProfile_S0_Name" value="Quality"><input type="hidden" name="root_StreamProfile_S0_Description"
      value="Best image quality and full frame rate."><input type="hidden" name="root_StreamProfile_S0_Parameters"
      value="resolution=1280x800&amp;compression=20&amp;fps=0&amp;videokeyframeinterval=8&amp;videobitrate=0&amp;videocodec=h264"><input
      type="hidden" name="root_StreamProfile_S0_Default_Name" value="Quality"><input type="hidden"
      name="root_StreamProfile_S0_Default_Description" value="Best image quality and full frame rate."><input
      type="hidden" name="root_StreamProfile_S0_Default_Parameters"
      value="videocodec=h264&amp;resolution=1280x800&amp;compression=20&amp;fps=0&amp;videokeyframeinterval=8&amp;videobitrate=0"><input
      type="hidden" name="root_StreamProfile_S1_Name" value="Balanced"><input type="hidden"
      name="root_StreamProfile_S1_Description" value="Medium image quality and frame rate."><input type="hidden"
      name="root_StreamProfile_S1_Parameters"
      value="resolution=800x600&amp;compression=20&amp;fps=20&amp;videokeyframeinterval=15&amp;videobitrate=0&amp;videocodec=h264"><input
      type="hidden" name="root_StreamProfile_S1_Default_Name" value="Balanced"><input type="hidden"
      name="root_StreamProfile_S1_Default_Description" value="Medium image quality and frame rate."><input type="hidden"
      name="root_StreamProfile_S1_Default_Parameters"
      value="videocodec=h264&amp;resolution=640x480&amp;compression=30&amp;fps=15&amp;videokeyframeinterval=15&amp;videobitrate=0"><input
      type="hidden" name="root_StreamProfile_S2_Name" value="Bandwidth"><input type="hidden"
      name="root_StreamProfile_S2_Description" value="Low bandwidth with medium image quality."><input type="hidden"
      name="root_StreamProfile_S2_Parameters"
      value="resolution=640x480&amp;compression=50&amp;fps=15&amp;videokeyframeinterval=32&amp;videobitrate=250&amp;videobitratepriority=framerate&amp;videocodec=h264"><input
      type="hidden" name="root_StreamProfile_S2_Default_Name" value="Bandwidth"><input type="hidden"
      name="root_StreamProfile_S2_Default_Description" value="Low bandwidth with medium image quality."><input
      type="hidden" name="root_StreamProfile_S2_Default_Parameters"
      value="videocodec=h264&amp;resolution=640x480&amp;compression=50&amp;fps=15&amp;videokeyframeinterval=32&amp;videobitrate=250&amp;videomaxbitrate=1000&amp;videobitratepriority=framerate"><input
      type="hidden" name="root_StreamProfile_S3_Name" value="Mobile"><input type="hidden"
      name="root_StreamProfile_S3_Description" value="Mobile device settings."><input type="hidden"
      name="root_StreamProfile_S3_Parameters"
      value="videocodec=h264&amp;resolution=176x144&amp;compression=50&amp;fps=15&amp;videokeyframeinterval=32&amp;videobitrate=120&amp;videomaxbitrate=128&amp;videobitratepriority=quality&amp;audio=0"><input
      type="hidden" name="root_StreamProfile_S3_Default_Name" value="Mobile"><input type="hidden"
      name="root_StreamProfile_S3_Default_Description" value="Mobile device settings."><input type="hidden"
      name="root_StreamProfile_S3_Default_Parameters"
      value="videocodec=h264&amp;resolution=176x144&amp;compression=50&amp;fps=15&amp;videokeyframeinterval=32&amp;videobitrate=120&amp;videomaxbitrate=128&amp;videobitratepriority=quality&amp;audio=0"><input
      type="hidden" name="root_StreamProfile_S4_Name" value="ACC_Continuous"><input type="hidden"
      name="root_StreamProfile_S4_Description" value="Camera Companion continuous recording"><input type="hidden"
      name="root_StreamProfile_S4_Parameters" value="videocodec=h264&amp;resolution=640x400&amp;fps=8"><input
      type="hidden" name="root_StreamProfile_S5_Name" value="ACC_Motion"><input type="hidden"
      name="root_StreamProfile_S5_Description" value="Camera Companion motion recording"><input type="hidden"
      name="root_StreamProfile_S5_Parameters" value="videocodec=h264&amp;resolution=1280x800&amp;fps=15"><input
      type="hidden" name="root_StreamProfile_S6_Name" value="mpeg"><input type="hidden"
      name="root_StreamProfile_S6_Description" value=""><input type="hidden" name="root_StreamProfile_S6_Parameters"
      value="resolution=1024x768&amp;compression=20&amp;mirror=0&amp;textstring=Campus%20Poppelsdorf&amp;textposition=top&amp;text=1&amp;clock=1&amp;date=1&amp;overlayimage=1&amp;fps=0&amp;maxframesize=0&amp;videocodec=jpeg">
  </form>
  <form name="listFormInt"><input type="hidden" name="root_ImageSource_NbrOfSources" value="1"><input type="hidden"
      name="root" value=""><input type="hidden" name="root_ImageSource_I0_Name" value="Camera"><input type="hidden"
      name="root" value=""><input type="hidden" name="root" value=""><input type="hidden" name="root" value=""><input
      type="hidden" name="root" value=""><input type="hidden" name="root" value=""><input type="hidden" name="root"
      value=""><input type="hidden" name="root" value=""><input type="hidden" name="root" value=""><input type="hidden"
      name="root" value=""><input type="hidden" name="root" value=""><input type="hidden" name="root" value=""><input
      type="hidden" name="root" value=""><input type="hidden" name="root" value=""><input type="hidden" name="root"
      value=""><input type="hidden" name="root" value=""><input type="hidden" name="root" value=""><input type="hidden"
      name="root_ImageSource_I0_Sensor_AspectRatio" value="16:10"><input type="hidden" name="root" value=""><input
      type="hidden" name="root" value="">
  </form>

  <form name="listFormCrop">
    <input type="hidden" name="root_Image_I0_Name" id="root_Image_I0_Name" value="View Area 1">
    <input type="hidden" name="root_Image_I0_Enabled" id="root_Image_I0_Enabled" value="yes">
    <input type="hidden" name="root_PTZ_Various_V1_Locked" id="root_PTZ_Various_V1_Locked" value="true">
  </form>

  <form name="listFormExt">
  </form>

  <form name="listFormPreset"><input type="hidden" name="root_PTZ_Preset_P0_ImageSource" value="0"><input type="hidden"
      name="root_PTZ_Preset_P0_HomePosition" value="1"><input type="hidden" name="root_PTZ_Preset_P0_Position_P1_Name"
      value="Home"><input type="hidden" name="root_PTZ_Preset_P0_Position_P1_Data"
      value="pan=0.000000:tilt=0.000000:zoom=1.000000">
  </form>

  <form name="listFormSeq">
  </form>

  <form name="outputsForm">
  </form>



  <form name="UploadedFilesForm">
  </form>

  <table width="100%" cellspacing="0" cellpadding="0" border="0">
    <tbody>
      <tr>
        <td align="center">
          <form name="WizardForm" method="post">
            <input type="hidden" name="root_Layout_Trigger_T0_Enabled" value="no">

            <input type="hidden" name="amount" value="0">

            <br>
            <table width="778" cellspacing="0" cellpadding="0" border="0">
              <tbody>
                <tr class="top-mainborder">
                  <td colspan="2"><img src="/line_corner_lt_5x5px.gif" width="5" height="5" border="0" alt="">
                  </td>
                  <td background="/line_t_100x5px.gif"><img src="/line_t_100x5px.gif" width="768"
                      height="5" border="0" alt=""></td>
                  <td colspan="2"><img src="/line_corner_rt_5x5px.gif" width="5" height="5" border="0" alt="">
                  </td>
                </tr>
                <tr>
                  <td class="lineBg"><img src="/blank.gif" width="1" border="0" alt=""></td>
                  <td><img src="/blank.gif" width="4" height="1" border="0" alt=""></td>
                  <td valign="middle" align="left" width="100%">
                    <table border="0" cellspacing="0" cellpadding="0" width="100%">
                      <tbody>
                        <tr>
                          <td>
                            <a href="http://www.axis.com/" target="_blank"><img src="/logo_70x29px.gif"
                                width="68" height="29" border="0" title="Axis" alt="Axis"></a>
                          </td>
                          <td class="topTitle" align="center" id="view_prodName">AXIS M1114 Network Camera</td>
                          <td align="right">
                            <table cellpadding="0" cellspacing="5" border="0">
                              <tbody>
                                <tr>
                                  <td><a href="http://131.220.172.253:8081/" target="_top" class="linkActive"
                                      id="view_LViewTxt">Live-Ansicht</a></td>
                                  <td>|</td>
                                  <td><a href="http://131.220.172.253:8081/operator/basic.shtml?id=963"
                                      class="linkInActive" target="_top" id="view_SetTxt1">Einrichtung</a></td>
                                  <td>|</td>
                                  <td><a href="#"
                                      onclick="javascript:launch('/help/liveview_h.shtml?cntrlQue=no'); return false;"
                                      class="linkInActive" id="view_HelpTxt">Hilfe</a></td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>

                  <td><img src="/blank.gif" width="4" border="0" alt=""></td>
                  <td class="lineBg"><img src="/blank.gif" width="1" height="1" alt=""></td>
                </tr>
                <tr>
                  <td class="lineBg"><img src="/blank.gif" width="1" height="5" alt=""></td>
                  <td colspan="3"><img src="/blank.gif" width="1" height="5" alt=""></td>
                  <td class="lineBg"><img src="/blank.gif" width="1" height="5" alt=""></td>
                </tr>
                <tr class="bottom-mainborder">
                  <td colspan="2"><img src="/line_corner_lb_5x5px.gif" width="5" height="5" alt=""></td>
                  <td background="/line_b_100x5px.gif"><img src="/blank.gif" width="768" height="5"
                      alt=""></td>
                  <td colspan="2"><img src="/line_corner_rb_5x5px.gif" width="5" height="5" alt=""></td>
                </tr>
                <tr>
                  <td colspan="5"><img src="/blank.gif" width="1" height="5" border="0" alt=""></td>
                </tr>

                <tr>
                  <td colspan="5">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tbody>
                        <tr id="appendableTr">
                          <td>
                            <table style="width: 100%; height: 46px; border: 0px;" cellpadding="0" cellspacing="0">
                              <tbody>
                                <tr class="top-mainborder">
                                  <td colspan="2"
                                    style="width: 5px; background-image: url('/pics/gray_corner_lt_5x50px.gif');">
                                    <img src="/blank.gif" style="width: 5px; height: 5px; border: 0px;"></td>
                                  <td valign="top" align="center"
                                    style="width: 100%; height: 5px; white-space: nowrap; background-image: url('/pics/gray_t_5x50px.gif');"
                                    class="funcText">Größe anzeigen</td>
                                  <td colspan="2"
                                    style="width: 5px; background-image: url('/pics/gray_corner_rt_5x50px.gif');">
                                    <img src="/blank.gif" style="width: 5px; height: 5px; border: 0px;"></td>
                                </tr>
                                <tr>
                                  <td style="width: 1px;" class="lineBg"><img src="/blank.gif"
                                      style="width: 1px; height: 5px; border: 0px;"></td>
                                  <td style="width: 4px;"><img src="/blank.gif"
                                      style="width: 4px; height: 5px; border: 0px;"></td>
                                  <td valign="middle" align="center" style="width: 100%;">
                                    <table cellpadding="0" cellspacing="0" style="border: 0px;">
                                      <tbody>
                                        <tr>
                                          <td valign="middle" align="left"><a href="javascript:dynamicResize(true)"
                                              target="_self"><img src="/button_downsize_gray_27x27px.gif"
                                                style="width: 27px; height: 27px;" border="0" id="adjustSize"
                                                alt="Adjust to the browser size" title="Adjust to the browser size"></a>
                                          </td>
                                          <td valign="middle" align="left"><a href="javascript:dynamicResize(false)"
                                              target="_self"><img src="/button_x1_27x27px.gif"
                                                style="width: 27px; height: 27px;" border="0" id="fullSize"
                                                alt="Vollbild" title="Vollbild"></a></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                  <td style="width: 4px;"><img src="/blank.gif"
                                      style="width: 4px; height: 5px; border: 0px;"></td>
                                  <td style="width: 1px;" class="lineBg"><img src="/blank.gif"
                                      style="width: 1px; height: 5px; border: 0px;"></td>
                                </tr>
                                <tr class="bottom-mainborder">
                                  <td colspan="2"
                                    style="width: 5px; background-image: url('/pics/line_corner_lb_5x5px.gif');">
                                    <img src="/blank.gif" style="width: 5px; height: 5px; border: 0px;"></td>
                                  <td
                                    style="width: 100%; height: 5px; background-image: url('/pics/line_b_100x5px.gif');">
                                    <img src="/blank.gif" style="width: 1px; height: 5px; border: 0px;"></td>
                                  <td colspan="2"
                                    style="width: 5px; height: 5px; background-image: url('/pics/line_corner_rb_5x5px.gif');">
                                    <img src="/blank.gif" style="width: 5px; height: 5px; border: 0px;"></td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td style="width: 5px;"><img src="/blank.gif"
                              style="width: 5px; height: 5px; border: 0px;"></td>
                          <td>
                            <table style="width: 100%; height: 46px; border: 0px;" cellpadding="0" cellspacing="0">
                              <tbody>
                                <tr class="top-mainborder">
                                  <td colspan="2"
                                    style="width: 5px; background-image: url('/pics/gray_corner_lt_5x50px.gif');">
                                    <img src="/blank.gif" style="width: 5px; height: 5px; border: 0px;"></td>
                                  <td valign="top" align="center"
                                    style="width: 100%; height: 5px; white-space: nowrap; background-image: url('/pics/gray_t_5x50px.gif');"
                                    class="funcText">Video-Streamprofil</td>
                                  <td colspan="2"
                                    style="width: 5px; background-image: url('/pics/gray_corner_rt_5x50px.gif');">
                                    <img src="/blank.gif" style="width: 5px; height: 5px; border: 0px;"></td>
                                </tr>
                                <tr>
                                  <td style="width: 1px;" class="lineBg"><img src="/blank.gif"
                                      style="width: 1px; height: 5px; border: 0px;"></td>
                                  <td style="width: 4px;"><img src="/blank.gif"
                                      style="width: 4px; height: 5px; border: 0px;"></td>
                                  <td valign="middle" align="center" style="width: 100%;">
                                    <table cellpadding="0" cellspacing="0" style="border: 0px;">
                                      <tbody>
                                        <tr>
                                          <td valign="middle" align="left"><select name="videoFormat" id="videoFormat">
                                              <option value="MJPEG" selected="selected">Motion JPEG</option>
                                              <option value="H264">H.264</option>
                                              <option value="0">Quality</option>
                                              <option value="1">Balanced</option>
                                              <option value="2">Bandwidth</option>
                                              <option value="3">Mobile</option>
                                              <option value="4">ACC_Continuous</option>
                                              <option value="5">ACC_Motion</option>
                                              <option value="6">mpeg</option>
                                            </select></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                  <td style="width: 4px;"><img src="/blank.gif"
                                      style="width: 4px; height: 5px; border: 0px;"></td>
                                  <td style="width: 1px;" class="lineBg"><img src="/blank.gif"
                                      style="width: 1px; height: 5px; border: 0px;"></td>
                                </tr>
                                <tr class="bottom-mainborder">
                                  <td colspan="2"
                                    style="width: 5px; background-image: url('/pics/line_corner_lb_5x5px.gif');">
                                    <img src="/blank.gif" style="width: 5px; height: 5px; border: 0px;"></td>
                                  <td
                                    style="width: 100%; height: 5px; background-image: url('/pics/line_b_100x5px.gif');">
                                    <img src="/blank.gif" style="width: 1px; height: 5px; border: 0px;"></td>
                                  <td colspan="2"
                                    style="width: 5px; height: 5px; background-image: url('/pics/line_corner_rb_5x5px.gif');">
                                    <img src="/blank.gif" style="width: 5px; height: 5px; border: 0px;"></td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td style="width: 5px;"><img src="/blank.gif"
                              style="width: 5px; height: 5px; border: 0px;"></td>
                          <td style="width: 100%;">
                            <table style="width: 100%; height: 46px; border: 0px;" cellpadding="0" cellspacing="0">
                              <tbody>
                                <tr class="top-mainborder">
                                  <td colspan="2"
                                    style="width: 5px; background-image: url('/pics/gray_corner_lt_5x50px.gif');">
                                    <img src="/blank.gif" style="width: 5px; height: 5px; border: 0px;"></td>
                                  <td valign="top" align="center"
                                    style="width: 100%; height: 5px; white-space: nowrap; background-image: url('/pics/gray_t_5x50px.gif');"
                                    class="funcText"><br></td>
                                  <td colspan="2"
                                    style="width: 5px; background-image: url('/pics/gray_corner_rt_5x50px.gif');">
                                    <img src="/blank.gif" style="width: 5px; height: 5px; border: 0px;"></td>
                                </tr>
                                <tr>
                                  <td style="width: 1px;" class="lineBg"><img src="/blank.gif"
                                      style="width: 1px; height: 5px; border: 0px;"></td>
                                  <td style="width: 4px;"><img src="/blank.gif"
                                      style="width: 4px; height: 5px; border: 0px;"></td>
                                  <td valign="middle" align="center" style="width: 100%;">
                                    <table cellpadding="0" cellspacing="0" style="border: 0px;">
                                      <tbody>
                                        <tr>
                                          <td valign="middle" align="left"><img src="/space.gif"
                                              style="width: 1px; height: 27px;" border="0"></td>
                                          <td valign="middle" align="left"><br></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                  <td style="width: 4px;"><img src="/blank.gif"
                                      style="width: 4px; height: 5px; border: 0px;"></td>
                                  <td style="width: 1px;" class="lineBg"><img src="/blank.gif"
                                      style="width: 1px; height: 5px; border: 0px;"></td>
                                </tr>
                                <tr class="bottom-mainborder">
                                  <td colspan="2"
                                    style="width: 5px; background-image: url('/pics/line_corner_lb_5x5px.gif');">
                                    <img src="/blank.gif" style="width: 5px; height: 5px; border: 0px;"></td>
                                  <td
                                    style="width: 100%; height: 5px; background-image: url('/pics/line_b_100x5px.gif');">
                                    <img src="/blank.gif" style="width: 1px; height: 5px; border: 0px;"></td>
                                  <td colspan="2"
                                    style="width: 5px; height: 5px; background-image: url('/pics/line_corner_rb_5x5px.gif');">
                                    <img src="/blank.gif" style="width: 5px; height: 5px; border: 0px;"></td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td style="width: 5px;"><img src="/blank.gif"
                              style="width: 5px; height: 5px; border: 0px;"></td>
                          <td>
                            <table style="width: 100%; height: 46px; border: 0px;" cellpadding="0" cellspacing="0">
                              <tbody>
                                <tr class="top-mainborder">
                                  <td colspan="2"
                                    style="width: 5px; background-image: url('/pics/gray_corner_lt_5x50px.gif');">
                                    <img src="/blank.gif" style="width: 5px; height: 5px; border: 0px;"></td>
                                  <td valign="top" align="center"
                                    style="width: 100%; height: 5px; white-space: nowrap; background-image: url('/pics/gray_t_5x50px.gif');"
                                    class="funcText">Schnappschuss</td>
                                  <td colspan="2"
                                    style="width: 5px; background-image: url('/pics/gray_corner_rt_5x50px.gif');">
                                    <img src="/blank.gif" style="width: 5px; height: 5px; border: 0px;"></td>
                                </tr>
                                <tr>
                                  <td style="width: 1px;" class="lineBg"><img src="/blank.gif"
                                      style="width: 1px; height: 5px; border: 0px;"></td>
                                  <td style="width: 4px;"><img src="/blank.gif"
                                      style="width: 4px; height: 5px; border: 0px;"></td>
                                  <td valign="middle" align="center" style="width: 100%;">
                                    <table cellpadding="0" cellspacing="0" style="border: 0px;">
                                      <tbody>
                                        <tr>
                                          <td valign="middle" align="left"><a href="#" target="_self"><img
                                                src="/button_shot_27x27px.gif"
                                                style="width: 27px; height: 27px;" border="0" alt="Schnappschuss"
                                                title="Schnappschuss"></a></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                  <td style="width: 4px;"><img src="/blank.gif"
                                      style="width: 4px; height: 5px; border: 0px;"></td>
                                  <td style="width: 1px;" class="lineBg"><img src="/blank.gif"
                                      style="width: 1px; height: 5px; border: 0px;"></td>
                                </tr>
                                <tr class="bottom-mainborder">
                                  <td colspan="2"
                                    style="width: 5px; background-image: url('/pics/line_corner_lb_5x5px.gif');">
                                    <img src="/blank.gif" style="width: 5px; height: 5px; border: 0px;"></td>
                                  <td
                                    style="width: 100%; height: 5px; background-image: url('/pics/line_b_100x5px.gif');">
                                    <img src="/blank.gif" style="width: 1px; height: 5px; border: 0px;"></td>
                                  <td colspan="2"
                                    style="width: 5px; height: 5px; background-image: url('/pics/line_corner_rb_5x5px.gif');">
                                    <img src="/blank.gif" style="width: 5px; height: 5px; border: 0px;"></td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td colspan="5"><img src="/blank.gif" width="1" height="5" border="0" alt=""></td>
                </tr>
                <tr class="top-mainborder">
                  <td colspan="2"><img src="/line_corner_lt_5x5px.gif" width="5" height="5" border="0" alt="">
                  </td>
                  <td background="/line_t_100x5px.gif"><img src="/blank.gif" width="768" height="5"
                      border="0" alt=""></td>
                  <td colspan="2"><img src="/line_corner_rt_5x5px.gif" width="5" height="5" border="0" alt="">
                  </td>
                </tr>

                <tr>
                  <td width="1" class="lineBg"><img src="/blank.gif" width="1" height="1" border="0" alt="">
                  </td>
                  <td width="4"><img src="/blank.gif" width="4" height="1" border="0" alt=""></td>
                  <td valign="top" align="center" width="768">

                    <table border="0" cellpadding="0" cellspacing="0" height="100%" width="776">
                      <tbody>
                        <tr height="197">
                          <td valign="top"></td>
                          <td valign="top" class="normalText" align="center" rowspan="2" colspan="2">
                            <div id="filterinstallocation"></div>
                          </td>
                          <td align="center" class="normalText">
                            <table border="0" cellpadding="3" cellspacing="3">
                              <tbody>
                                <tr>
                                  <td>
                                    <table cellspacing="0" cellpadding="0" border="0" style="min-width:260">
                                      <tbody>
                                        <tr>
                                          <td colspan="3" align="center">
                                          ${ state.playback.map(e => html`
                                          <div class="video-container">
                                            <video autoplay onended=${ended.bind(e)} muted playsinline>
                                              <source src="/${e.url}" type="video/mp4" />
                                            </video>
                                          </div>
                                        `) }
                                
                                          <img style="display:none" id="stream" src="/video.html"
                                              width="747" height="560" border="0"
                                              alt="Wenn kein Bild angezeigt wird, gibt es m�glicherweise zu viele Betrachter oder die Browserkonfiguration muss ge�ndert werden. Ausf�hrliche Informationen dar�ber finden Sie in der Hilfe."><br>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td colspan="3" align="center" style="white-space:nowrap">
                                            <div class="cornerVideoBox">
                                              <div class="content">
                                                <table cellspacing="0" border="0" width="100%" id="videoItems"
                                                  class="shownItems">
                                                  <tbody>
                                                    <tr height="32">
                                                      <td align="left" width="40"><a id="stopBtn"
                                                          href="javascript:void(0)"
                                                          onclick="stopStartStream('/jpg/1/image.jpg')"
                                                          style="display: inline;"><img
                                                            src="/stop_blue_button_27x27px.gif" width="27"
                                                            height="27" alt="Streaming anhalten"
                                                            title="Streaming anhalten" border="0"
                                                            onmouseover="javascript:btnShiftCls( this, true )"
                                                            onmouseout="javascript:btnShiftCls( this, false )"></a><a
                                                          id="playBtn" style="display:none;" href="javascript:void(0)"
                                                          onclick="stopStartStream('/jpg/video.jpg')"><img
                                                            src="/play_blue_button_27x27px.gif" width="27"
                                                            height="27" alt="Streaming starten"
                                                            title="Streaming starten" border="0"
                                                            onmouseover="javascript:btnShiftCls( this, true )"
                                                            onmouseout="javascript:btnShiftCls( this, false )"></a></td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </div>
                                              <div class="footerLeft">
                                                <div class="footerRight"></div>
                                              </div>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>


                      </tbody>
                    </table>
                  </td>
                  <td width="4"><img src="/blank.gif" width="4" height="1" border="0" alt=""></td>
                  <td width="1" class="lineBg"><img src="/blank.gif" width="1" height="1" border="0" alt="">
                  </td>
                </tr>
                <!-- ################################################################ -->
                <!-- Defines the table width -->
                <tr>
                  <td colspan="1" width="1" class="lineBg"><img src="/blank.gif" width="1" height="1" alt="">
                  </td>
                  <td colspan="1" width="4"><img src="/blank.gif" width="1" height="1" alt=""></td>
                  <td colspan="1" width="768"><img src="/blank.gif" width="1" height="1" alt=""></td>
                  <td colspan="1" width="4"><img src="/blank.gif" width="1" height="1" alt=""></td>
                  <td colspan="1" width="1" class="lineBg"><img src="/blank.gif" width="1" height="1" alt="">
                  </td>
                </tr>
                <!-- ################################################################ -->
                <tr class="bottom-mainborder">
                  <td colspan="2"><img src="/line_corner_lb_5x5px.gif" width="5" height="5" alt=""></td>
                  <td colspan="1" background="/line_b_100x5px.gif"><img src="/blank.gif" width="1"
                      height="1" alt=""></td>
                  <td colspan="2"><img src="/line_corner_rb_5x5px.gif" width="5" height="5" alt=""></td>
                </tr>


                <tr>
                  <td width="1"><img src="/blank.gif" width="1" height="1" border="0" alt=""></td>
                  <td colspan="6" valign="middle" align="left">
                    <table cellpadding="0" cellspacing="5" border="0">
                      <tbody>
                        <tr>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td width="1"><img src="/blank.gif" width="1" height="1" border="0" alt=""></td>
                </tr>
              </tbody>
            </table>
          </form>
        </td>
      </tr>
      <!-- wizardForm -->
    </tbody>
  </table>
</div>
  `;
  function ended(ev) {
    if (!state.throbber) {
      ev.target.src = "/throbber.mp4";
      state.throbber = true;

      let origin = state.windowPosition;
      let target = [
        Math.random() * (window.screen.width - window.outerWidth),
        Math.random() * (window.screen.height - window.outerHeight)
      ]
      function lerp(a, b, p) {
        return a * (1 - p) + b * p;
      }
      const N = 10;
      for (let i = 1; i <= N; i++) {
        let x = lerp(origin[0], target[0], i / N);
        let y = lerp(origin[1], target[1], i / N);
        setTimeout(() => {
          window.moveTo(x, y);
          if (i == N) {
            window.focus();
          }
        }, 1320 * i / N);
      }
  
      state.windowPosition = target;
      return;
    }

    state.throbber = false;
    const v = [
      "2023-09-26-bonn-001.mp4",
      "2023-09-26-bonn-002.mp4",
      "2023-09-26-bonn-003.mp4",
      "daniel-1.mp4",
      "daniel-2.mp4",
    ];

    if (Math.random() > 0.8) {
      // let w = window.open("http://131.220.172.253:8081", `target`,
      let w = window.open("http://192.168.4.149/axis-cgi/mjpg/video.cgi?resolution=640x480", `target`,
      `left=${ state.windowPosition[0] },top=${ state.windowPosition[1] },width=760,height=720`);
      setTimeout(() => {
        w?.close();
        ended.bind(ev)(ev);
      }, 10 * 1000)

      // const frame = html`
      // <iframe src="http://131.220.172.253:8081" width="760" height="720"
      // style="position:absolute;top:0;left:0;width:100%;height100vh;z-index:100" />`
      // document.body.appendChild(frame)
    }
    else if (Math.random() > 0.95) {
      this.id = Math.floor(Math.random() * v.length);
      this.url = v[this.id];
      if (Math.random() > 0.5) {
        ev.target.src = this.url;
      }
      else {
        let w = window.open(`/#camera/${ this.url }`, `target`,
        `left=0,top=0,width=${ window.screen.width },height=${ window.screen.height }`);
        setTimeout(() => {
          w?.close();
          ended.bind(ev)(ev);
        }, 10 * 1000)
      }
    }
    else {
      ev.target.src = "/videos-converted/" + this.url;
      ev.target.onerror = (e) => {
        console.log("lol", e);
        ended.bind(e)(ev);
      }
    }

    this.id = Math.floor(Math.random() * state.videos.length);
    this.url = state.videos[this.id];
  }
}
