# Advanced API 2.2.13.0 documentation

This is the Websocket documentation for the NINA plugin Advanced API.

## Table of Contents

* [Servers](#servers)
  * [production](#production-server)
* [Operations](#operations)
  * [SUB /socket](#sub-socket-operation)
  * [PUB /tppa](#pub-tppa-operation)
  * [SUB /tppa](#sub-tppa-operation)
  * [PUB /mount](#pub-mount-operation)
  * [SUB /mount](#sub-mount-operation)
  * [PUB /filterwheel](#pub-filterwheel-operation)
  * [SUB /filterwheel](#sub-filterwheel-operation)
  * [PUB /rotator](#pub-rotator-operation)
  * [SUB /rotator](#sub-rotator-operation)

## Servers

### `production` Server

* URL: `ws://localhost:1888/v2`
* Protocol: `ws`

Production server


## Operations

### SUB `/socket` Operation

*Subscribe to WebSocket events*

WebSocket channel for events

Accepts **one of** the following messages:

#### Message Simple Event Response `<anonymous-message-1>`

* Message ID: `<anonymous-message-1>`
* Content type: [application/json](https://www.iana.org/assignments/media-types/application/json)

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | object | - | - | - | **additional properties are allowed** |
| Response | object | - | - | - | **additional properties are allowed** |
| Response.Event | string | The event name | allowed (`"API-CAPTURE-FINISHED"`, `"AUTOFOCUS-FINISHED"`, `"AUTOFOCUS-STARTING"`, `"CAMERA-CONNECTED"`, `"CAMERA-DISCONNECTED"`, `"CAMERA-DOWNLOAD-TIMEOUT"`, `"DOME-CONNECTED"`, `"DOME-DISCONNECTED"`, `"DOME-SHUTTER-CLOSED"`, `"DOME-SHUTTER-OPENED"`, `"DOME-HOMED"`, `"DOME-PARKED"`, `"DOME-STOPPED"`, `"DOME-SLEWED"`, `"DOME-SYNCED"`, `"FILTERWHEEL-CONNECTED"`, `"FILTERWHEEL-DISCONNECTED"`, `"FLAT-CONNECTED"`, `"FLAT-DISCONNECTED"`, `"FLAT-LIGHT-TOGGLED"`, `"FLAT-COVER-OPENED"`, `"FLAT-COVER-CLOSED"`, `"FOCUSER-CONNECTED"`, `"FOCUSER-DISCONNECTED"`, `"FOCUSER-USER-FOCUSED"`, `"GUIDER-CONNECTED"`, `"GUIDER-DISCONNECTED"`, `"GUIDER-START"`, `"GUIDER-STOP"`, `"GUIDER-DITHER"`, `"IMAGE-PREPARED"`, `"MOUNT-CONNECTED"`, `"MOUNT-DISCONNECTED"`, `"MOUNT-BEFORE-FLIP"`, `"MOUNT-AFTER-FLIP"`, `"MOUNT-HOMED"`, `"MOUNT-PARKED"`, `"MOUNT-UNPARKED"`, `"MOUNT-CENTER"`, `"PROFILE-ADDED"`, `"PROFILE-CHANGED"`, `"PROFILE-REMOVED"`, `"ROTATOR-CONNECTED"`, `"ROTATOR-DISCONNECTED"`, `"ROTATOR-SYNCED"`, `"SAFETY-CONNECTED"`, `"SAFETY-DISCONNECTED"`, `"SEQUENCE-STARTING"`, `"SEQUENCE-FINISHED"`, `"STACK-STATUS"`, `"STACK-UPDATED"`, `"SWITCH-CONNECTED"`, `"SWITCH-DISCONNECTED"`, `"WEATHER-CONNECTED"`, `"WEATHER-DISCONNECTED"`, `"ERROR-AF"`, `"ERROR-PLATESOLVE"`) | - | - |
| Error | string | - | - | - | - |
| StatusCode | integer | - | - | - | - |
| Success | boolean | - | - | - | - |
| Type | string | - | - | - | - |

> Examples of payload _(generated)_

```json
{
  "Response": {
    "Event": "API-CAPTURE-FINISHED"
  },
  "Error": "string",
  "StatusCode": 200,
  "Success": true,
  "Type": "Socket"
}
```


#### Message Image Save Event `<anonymous-message-2>`

* Message ID: `<anonymous-message-2>`
* Content type: [application/json](https://www.iana.org/assignments/media-types/application/json)

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | object | - | - | - | **additional properties are allowed** |
| Response | object | - | - | - | **additional properties are allowed** |
| Response.Event | string | - | - | - | - |
| Response.ImageStatistics | - | - | - | - | **additional properties are allowed** |
| Response.ImageStatistics.ExposureTime | number | - | - | - | - |
| Response.ImageStatistics.Index | number | - | - | - | - |
| Response.ImageStatistics.Filter | string | - | - | - | - |
| Response.ImageStatistics.RmsText | string | - | - | - | - |
| Response.ImageStatistics.Temperature | number | - | - | - | - |
| Response.ImageStatistics.CameraName | string | - | - | - | - |
| Response.ImageStatistics.Gain | number | - | - | - | - |
| Response.ImageStatistics.Offset | number | - | - | - | - |
| Response.ImageStatistics.Date | string | - | - | - | - |
| Response.ImageStatistics.TelescopeName | string | - | - | - | - |
| Response.ImageStatistics.FocalLength | number | - | - | - | - |
| Response.ImageStatistics.StDev | number | - | - | - | - |
| Response.ImageStatistics.Mean | number | - | - | - | - |
| Response.ImageStatistics.Median | number | - | - | - | - |
| Response.ImageStatistics.Stars | number | - | - | - | - |
| Response.ImageStatistics.HFR | number | - | - | - | - |
| Response.ImageStatistics.IsBayered | boolean | - | - | - | - |
| Response.ImageStatistics.Min | number | - | - | - | - |
| Response.ImageStatistics.Max | number | - | - | - | - |
| Response.ImageStatistics.HFRStDev | number | - | - | - | - |
| Response.ImageStatistics.TargetName | string | - | - | - | - |
| Response.ImageStatistics.Filename | string | - | - | - | - |
| Error | string | - | - | - | - |
| StatusCode | integer | - | - | - | - |
| Success | boolean | - | - | - | - |
| Type | string | - | - | - | - |

> Examples of payload _(generated)_

```json
{
  "Response": {
    "Event": "IMAGE-SAVE",
    "ImageStatistics": {
      "ExposureTime": 0,
      "Index": 0,
      "Filter": "string",
      "RmsText": "string",
      "Temperature": 0,
      "CameraName": "string",
      "Gain": 0,
      "Offset": 0,
      "Date": "string",
      "TelescopeName": "string",
      "FocalLength": 0,
      "StDev": 0,
      "Mean": 0,
      "Median": 0,
      "Stars": 0,
      "HFR": 0,
      "IsBayered": true,
      "Min": 0,
      "Max": 0,
      "HFRStDev": 0,
      "TargetName": "string",
      "Filename": "string"
    }
  },
  "Error": "string",
  "StatusCode": 200,
  "Success": true,
  "Type": "Socket"
}
```


#### Message Autofocus point added `<anonymous-message-3>`

* Message ID: `<anonymous-message-3>`
* Content type: [application/json](https://www.iana.org/assignments/media-types/application/json)

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | object | - | - | - | **additional properties are allowed** |
| Response | object | - | - | - | **additional properties are allowed** |
| Response.Event | string | - | - | - | - |
| Response.ImageStatistics | - | - | - | - | **additional properties are allowed** |
| Response.ImageStatistics.Position | number | - | - | - | - |
| Response.ImageStatistics.HFR | number | - | - | - | - |
| Error | string | - | - | - | - |
| StatusCode | integer | - | - | - | - |
| Success | boolean | - | - | - | - |
| Type | string | - | - | - | - |

> Examples of payload _(generated)_

```json
{
  "Response": {
    "Event": "AUTOFOCUS-POINT-ADDED",
    "ImageStatistics": {
      "Position": 0,
      "HFR": 0
    }
  },
  "Error": "string",
  "StatusCode": 200,
  "Success": true,
  "Type": "Socket"
}
```


#### Message Filter Changed Event `<anonymous-message-4>`

* Message ID: `<anonymous-message-4>`
* Content type: [application/json](https://www.iana.org/assignments/media-types/application/json)

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | object | - | - | - | **additional properties are allowed** |
| Response | object | - | - | - | **additional properties are allowed** |
| Response.Event | string | - | - | - | - |
| Response.Previous | - | - | - | - | **additional properties are allowed** |
| Response.Previous.Name | string | - | - | - | - |
| Response.Previous.Íd | integer | - | - | - | - |
| Response.New | - | - | - | - | **additional properties are allowed** |
| Response.New.Name | string | - | - | - | - |
| Response.New.Íd | integer | - | - | - | - |
| Error | string | - | - | - | - |
| StatusCode | integer | - | - | - | - |
| Success | boolean | - | - | - | - |
| Type | string | - | - | - | - |

> Examples of payload _(generated)_

```json
{
  "Response": {
    "Event": "FILTERWHEEL-CHANGED",
    "Previous": {
      "Name": "Filter 1",
      "Íd": 1
    },
    "New": {
      "Name": "Filter 2",
      "Íd": 2
    }
  },
  "Error": "string",
  "StatusCode": 200,
  "Success": true,
  "Type": "Socket"
}
```


#### Message Flat Brightness Changed Event `<anonymous-message-5>`

* Message ID: `<anonymous-message-5>`
* Content type: [application/json](https://www.iana.org/assignments/media-types/application/json)

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | object | - | - | - | **additional properties are allowed** |
| Response | object | - | - | - | **additional properties are allowed** |
| Response.Event | string | - | - | - | - |
| Response.Previous | integer | Brightness in percent | - | [ 0 .. 100 ] | - |
| Response.New | integer | Brightness in percent | - | [ 0 .. 100 ] | - |
| Error | string | - | - | - | - |
| StatusCode | integer | - | - | - | - |
| Success | boolean | - | - | - | - |
| Type | string | - | - | - | - |

> Examples of payload _(generated)_

```json
{
  "Response": {
    "Event": "FLAT-BRIGHTNESS-CHANGED",
    "Previous": 0,
    "New": 100
  },
  "Error": "string",
  "StatusCode": 200,
  "Success": true,
  "Type": "Socket"
}
```


#### Message Safety Changed Event `<anonymous-message-6>`

* Message ID: `<anonymous-message-6>`
* Content type: [application/json](https://www.iana.org/assignments/media-types/application/json)

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | object | - | - | - | **additional properties are allowed** |
| Response | object | - | - | - | **additional properties are allowed** |
| Response.Event | string | - | - | - | - |
| Response.IsSafe | boolean | - | - | - | - |
| Error | string | - | - | - | - |
| StatusCode | integer | - | - | - | - |
| Success | boolean | - | - | - | - |
| Type | string | - | - | - | - |

> Examples of payload _(generated)_

```json
{
  "Response": {
    "Event": "SAFETY-CHANGED",
    "IsSafe": true
  },
  "Error": "string",
  "StatusCode": 200,
  "Success": true,
  "Type": "Socket"
}
```


#### Message Live stack updated (requires Livestack >= 1.0.0.9) `<anonymous-message-7>`

* Message ID: `<anonymous-message-7>`
* Content type: [application/json](https://www.iana.org/assignments/media-types/application/json)

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | object | - | - | - | **additional properties are allowed** |
| Response | object | - | - | - | **additional properties are allowed** |
| Response.Event | string | - | - | - | **required** |
| Response.Filter | string | - | - | - | **required** |
| Response.Target | string | - | - | - | **required** |
| Response.IsMonochrome | boolean | - | - | - | **required** |
| Response.StackCount | integer | Only present if IsMonochrome is true | - | - | - |
| Response.RedStackCount | integer | Only present if IsMonochrome is false | - | - | - |
| Response.GreenStackCount | integer | Only present if IsMonochrome is false | - | - | - |
| Response.BlueStackCount | integer | Only present if IsMonochrome is false | - | - | - |
| Error | string | - | - | - | - |
| StatusCode | integer | - | - | - | - |
| Success | boolean | - | - | - | - |
| Type | string | - | - | - | - |

> Examples of payload _(generated)_

```json
{
  "Response": {
    "Event": "STACK-UPDATED",
    "Filter": "RGB",
    "Target": "M31",
    "IsMonochrome": true,
    "StackCount": 10,
    "RedStackCount": 10,
    "GreenStackCount": 10,
    "BlueStackCount": 10
  },
  "Error": "string",
  "StatusCode": 200,
  "Success": true,
  "Type": "Socket"
}
```


#### Message Live stack updstateated (requires Livestack >= 1.0.1.7) `<anonymous-message-8>`

* Message ID: `<anonymous-message-8>`
* Content type: [application/json](https://www.iana.org/assignments/media-types/application/json)

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | object | - | - | - | **additional properties are allowed** |
| Response | object | - | - | - | **additional properties are allowed** |
| Response.Event | string | - | - | - | **required** |
| Response.Status | string | - | allowed (`"running"`, `"stopped"`) | - | **required** |
| Error | string | - | - | - | - |
| StatusCode | integer | - | - | - | - |
| Success | boolean | - | - | - | - |
| Type | string | - | - | - | - |

> Examples of payload _(generated)_

```json
{
  "Response": {
    "Event": "STACK-STATUS",
    "Status": "running"
  },
  "Error": "string",
  "StatusCode": 200,
  "Success": true,
  "Type": "Socket"
}
```


#### Message TS Wait Start Event `<anonymous-message-9>`

* Message ID: `<anonymous-message-9>`
* Content type: [application/json](https://www.iana.org/assignments/media-types/application/json)

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | object | - | - | - | **additional properties are allowed** |
| Response | object | - | - | - | **additional properties are allowed** |
| Response.Event | string | - | - | - | - |
| Response.WaitStartTime | string | - | - | - | - |
| Error | string | - | - | - | - |
| StatusCode | integer | - | - | - | - |
| Success | boolean | - | - | - | - |
| Type | string | - | - | - | - |

> Examples of payload _(generated)_

```json
{
  "Response": {
    "Event": "TS-WAITSTART",
    "WaitStartTime": "string"
  },
  "Error": "string",
  "StatusCode": 200,
  "Success": true,
  "Type": "Socket"
}
```


#### Message TS (New) Target Start Event `<anonymous-message-10>`

* Message ID: `<anonymous-message-10>`
* Content type: [application/json](https://www.iana.org/assignments/media-types/application/json)

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | object | - | - | - | **additional properties are allowed** |
| Response | object | - | - | - | **additional properties are allowed** |
| Response.Event | string | - | allowed (`"TS-NEWTARGETSTART"`, `"TS-TARGETSTART"`) | - | - |
| Response.TargetName | string | - | - | - | - |
| Response.ProjectName | string | - | - | - | - |
| Response.Coordinates | object | - | - | - | **additional properties are allowed** |
| Response.Coordinates.RA | number | - | - | - | - |
| Response.Coordinates.RAString | string | - | - | - | - |
| Response.Coordinates.RADegrees | number | - | - | - | - |
| Response.Coordinates.Dec | number | - | - | - | - |
| Response.Coordinates.DecString | string | - | - | - | - |
| Response.Coordinates.Epoch | string | - | allowed (`"JNOW"`, `"B1950"`, `"J2000"`, `"J2050"`) | - | - |
| Response.Coordinates.DateTime | object | - | - | - | **additional properties are allowed** |
| Response.Coordinates.DateTime.Now | string | - | - | - | - |
| Response.Coordinates.DateTime.UtcNow | string | - | - | - | - |
| Response.Rotation | number | - | - | - | - |
| Response.TargetEndTime | string | - | - | - | - |
| Error | string | - | - | - | - |
| StatusCode | integer | - | - | - | - |
| Success | boolean | - | - | - | - |
| Type | string | - | - | - | - |

> Examples of payload _(generated)_

```json
{
  "Response": {
    "Event": "TS-NEWTARGETSTART",
    "TargetName": "string",
    "ProjectName": "string",
    "Coordinates": {
      "RA": 0,
      "RAString": "string",
      "RADegrees": 0,
      "Dec": 0,
      "DecString": "string",
      "Epoch": "JNOW",
      "DateTime": {
        "Now": "string",
        "UtcNow": "string"
      }
    },
    "Rotation": 0,
    "TargetEndTime": "string"
  },
  "Error": "string",
  "StatusCode": 200,
  "Success": true,
  "Type": "Socket"
}
```


#### Message Send WebSocket Event Instruction `<anonymous-message-11>`

* Message ID: `<anonymous-message-11>`
* Content type: [application/json](https://www.iana.org/assignments/media-types/application/json)

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | object | - | - | - | **additional properties are allowed** |
| Response | string | - | - | - | - |
| Error | string | - | - | - | - |
| StatusCode | integer | - | - | - | - |
| Success | boolean | - | - | - | - |
| Type | string | - | - | - | - |

> Examples of payload _(generated)_

```json
{
  "Response": "Test event",
  "Error": "string",
  "StatusCode": 200,
  "Success": true,
  "Type": "Socket"
}
```


#### Message Send Error to WebSocket Trigger `<anonymous-message-12>`

* Message ID: `<anonymous-message-12>`
* Content type: [application/json](https://www.iana.org/assignments/media-types/application/json)

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | object | - | - | - | **additional properties are allowed** |
| Response | object | - | - | - | **additional properties are allowed** |
| Response.Event | string | - | - | - | - |
| Response.Entity | string | - | - | - | - |
| Response.Error | string | - | - | - | - |
| Error | string | - | - | - | - |
| StatusCode | integer | - | - | - | - |
| Success | boolean | - | - | - | - |
| Type | string | - | - | - | - |

> Examples of payload _(generated)_

```json
{
  "Response": {
    "Event": "SEQUENCE-ENTITY-FAILED",
    "Entity": "Dew Heater",
    "Error": "Camera not connected"
  },
  "Error": "string",
  "StatusCode": 200,
  "Success": true,
  "Type": "Socket"
}
```


#### Message Rotator moved `<anonymous-message-13>`

* Message ID: `<anonymous-message-13>`
* Content type: [application/json](https://www.iana.org/assignments/media-types/application/json)

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | object | - | - | - | **additional properties are allowed** |
| Response | object | - | - | - | **additional properties are allowed** |
| Response.Event | string | - | - | - | - |
| Response.From | number | - | - | - | - |
| Response.To | number | - | - | - | - |
| Error | string | - | - | - | - |
| StatusCode | integer | - | - | - | - |
| Success | boolean | - | - | - | - |
| Type | string | - | - | - | - |

> Examples of payload _(generated)_

```json
{
  "Response": {
    "Event": "ROTATOR-MOVED",
    "From": 0,
    "To": 100
  },
  "Error": "string",
  "StatusCode": 200,
  "Success": true,
  "Type": "Socket"
}
```


#### Message Rotator moved mechanical `<anonymous-message-14>`

* Message ID: `<anonymous-message-14>`
* Content type: [application/json](https://www.iana.org/assignments/media-types/application/json)

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | object | - | - | - | **additional properties are allowed** |
| Response | object | - | - | - | **additional properties are allowed** |
| Response.Event | string | - | - | - | - |
| Response.From | number | - | - | - | - |
| Response.To | number | - | - | - | - |
| Error | string | - | - | - | - |
| StatusCode | integer | - | - | - | - |
| Success | boolean | - | - | - | - |
| Type | string | - | - | - | - |

> Examples of payload _(generated)_

```json
{
  "Response": {
    "Event": "ROTATOR-MOVED-MECHANICAL",
    "From": 0,
    "To": 100
  },
  "Error": "string",
  "StatusCode": 200,
  "Success": true,
  "Type": "Socket"
}
```



### PUB `/tppa` Operation

*Start or Stop TPPA*

TPPA WebSocket channel. To use this channel, TPPA >= 2.2.4.1 must be installed. You can specify the TPPA settings in the json payload.

Accepts **one of** the following messages:

#### Message `<anonymous-message-15>`

* Message ID: `<anonymous-message-15>`
* Content type: [application/text](https://www.iana.org/assignments/media-types/application/text)

This is deprecated. Use the json payload instead.

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | string | - | allowed (`"start-alignment"`, `"stop-alignment"`, `"pause-alignment"`, `"resume-alignment"`) | - | - |

> Examples of payload _(generated)_

```json
"start-alignment"
```


#### Message `<anonymous-message-16>`

* Message ID: `<anonymous-message-16>`
* Content type: [application/json](https://www.iana.org/assignments/media-types/application/json)

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | object | - | - | - | **additional properties are allowed** |
| Action | string | - | allowed (`"start-alignment"`, `"stop-alignment"`, `"pause-alignment"`, `"resume-alignment"`) | - | **required** |
| ManualMode | boolean | Relevant for start-alignment only. If true, the alignment will be started in manual mode. | - | - | - |
| TargetDistance | integer | Relevant for start-alignment only. | - | - | - |
| MoveRate | integer | Relevant for start-alignment only. | - | - | - |
| EastDirection | boolean | Relevant for start-alignment only. | - | - | - |
| StartFromCurrentPosition | boolean | Relevant for start-alignment only. | - | - | - |
| AltDegrees | integer | Relevant for start-alignment only. | - | - | - |
| AltMinutes | integer | Relevant for start-alignment only. | - | format (`int32`) | - |
| AltSeconds | number | Relevant for start-alignment only. | - | format (`double`) | - |
| AzDegrees | integer | Relevant for start-alignment only. | - | - | - |
| AzMinutes | integer | Relevant for start-alignment only. | - | format (`int32`) | - |
| AzSeconds | number | Relevant for start-alignment only. | - | format (`double`) | - |
| AlignmentTolerance | number | Relevant for start-alignment only. | - | format (`double`) | - |
| Filter | string | Relevant for start-alignment only. The name of the filter to use. | - | - | - |
| ExposureTime | number | Relevant for start-alignment only. | - | format (`double`) | - |
| Binning | integer | Relevant for start-alignment only. | - | format (`int32`) | - |
| Gain | integer | Relevant for start-alignment only. | - | format (`int32`) | - |
| Offset | integer | Relevant for start-alignment only. | - | format (`int32`) | - |
| SearchRadius | number | Relevant for start-alignment only. | - | format (`double`) | - |

> Examples of payload _(generated)_

```json
{
  "Action": "start-alignment",
  "ManualMode": true,
  "TargetDistance": 0,
  "MoveRate": 0,
  "EastDirection": true,
  "StartFromCurrentPosition": true,
  "AltDegrees": 0,
  "AltMinutes": 0,
  "AltSeconds": 0.1,
  "AzDegrees": 0,
  "AzMinutes": 0,
  "AzSeconds": 0.1,
  "AlignmentTolerance": 0.1,
  "Filter": "string",
  "ExposureTime": 0.1,
  "Binning": 0,
  "Gain": 0,
  "Offset": 0,
  "SearchRadius": 0.1
}
```



### SUB `/tppa` Operation

*Subscribe to TPPA WebSocket events*

* Operation ID: `onTPPAEvent`

TPPA WebSocket channel. To use this channel, TPPA >= 2.2.4.1 must be installed. You can specify the TPPA settings in the json payload.

Accepts **one of** the following messages:

#### Message Alignment Error Response `<anonymous-message-17>`

* Message ID: `<anonymous-message-17>`
* Content type: [application/json](https://www.iana.org/assignments/media-types/application/json)

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | object | - | - | - | **additional properties are allowed** |
| Response | object | - | - | - | **required**, **additional properties are allowed** |
| Response.AzimuthError | number | - | - | - | - |
| Response.AltitudeError | number | - | - | - | - |
| Response.TotalError | number | - | - | - | - |
| Error | string | - | - | - | **required** |
| StatusCode | integer | - | - | - | **required** |
| Success | boolean | - | - | - | **required** |
| Type | string | - | - | - | **required** |

> Examples of payload _(generated)_

```json
{
  "Response": {
    "AzimuthError": 0,
    "AltitudeError": 0,
    "TotalError": 0
  },
  "Error": "string",
  "StatusCode": 200,
  "Success": true,
  "Type": "Socket"
}
```


#### Message Process Confirmation Response `<anonymous-message-18>`

* Message ID: `<anonymous-message-18>`
* Content type: [application/json](https://www.iana.org/assignments/media-types/application/json)

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | object | - | - | - | **additional properties are allowed** |
| Response | string | - | allowed (`"started procedure"`, `"stopped procedure"`, `"paused procedure"`, `"resumed procedure"`) | - | **required** |
| Error | string | - | - | - | **required** |
| StatusCode | integer | - | - | - | **required** |
| Success | boolean | - | - | - | **required** |
| Type | string | - | - | - | **required** |

> Examples of payload _(generated)_

```json
{
  "Response": "started procedure",
  "Error": "string",
  "StatusCode": 200,
  "Success": true,
  "Type": "Socket"
}
```


#### Message Progress Response `<anonymous-message-19>`

* Message ID: `<anonymous-message-19>`
* Content type: [application/json](https://www.iana.org/assignments/media-types/application/json)

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | object | - | - | - | **additional properties are allowed** |
| Response | object | - | - | - | **required**, **additional properties are allowed** |
| Response.Status | string | - | - | - | - |
| Response.Progress | number | - | - | format (`double`) | - |
| Error | string | - | - | - | **required** |
| StatusCode | integer | - | - | - | **required** |
| Success | boolean | - | - | - | **required** |
| Type | string | - | - | - | **required** |

> Examples of payload _(generated)_

```json
{
  "Response": {
    "Status": "Moving to next point",
    "Progress": 0.75
  },
  "Error": "string",
  "StatusCode": 200,
  "Success": true,
  "Type": "Socket"
}
```



### PUB `/mount` Operation

*Move mount axis*

A websocket channel to move the mount axis manually. You will need to resend the command to move the axis periodically about every second, because the server will automatically stop the movement when it hasn't recieved a command for two seconds as a safety measure.

#### Message `<anonymous-message-20>`

* Message ID: `<anonymous-message-20>`
* Content type: [application/json](https://www.iana.org/assignments/media-types/application/json)

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | object | - | - | - | **additional properties are allowed** |
| direction | string | - | allowed (`"east"`, `"west"`, `"north"`, `"south"`) | - | - |
| rate | number | - | - | format (`double`) | - |

> Examples of payload _(generated)_

```json
{
  "direction": "east",
  "rate": 0.1
}
```



### SUB `/mount` Operation

*Subscribe to mount axis move events*

A websocket channel to move the mount axis manually. You will need to resend the command to move the axis periodically about every second, because the server will automatically stop the movement when it hasn't recieved a command for two seconds as a safety measure.

Accepts **one of** the following messages:

#### Message Mount Axis Move Response `<anonymous-message-21>`

* Message ID: `<anonymous-message-21>`
* Content type: [application/json](https://www.iana.org/assignments/media-types/application/json)

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | object | - | - | - | **additional properties are allowed** |
| Response | string | - | allowed (`"Moving"`, `"Stopped Move"`) | - | - |
| Error | string | - | - | - | - |
| StatusCode | integer | - | - | - | - |
| Success | boolean | - | - | - | - |
| Type | string | - | - | - | - |

> Examples of payload _(generated)_

```json
{
  "Response": "Moving",
  "Error": "string",
  "StatusCode": 200,
  "Success": true,
  "Type": "Socket"
}
```


#### Message Error `<anonymous-message-22>`

* Message ID: `<anonymous-message-22>`
* Content type: [application/json](https://www.iana.org/assignments/media-types/application/json)

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | object | - | - | - | **additional properties are allowed** |
| Response | string | - | - | - | - |
| Error | string | - | - | - | - |
| StatusCode | integer | - | - | - | - |
| Success | boolean | - | - | - | - |
| Type | string | - | - | - | - |

> Examples of payload _(generated)_

```json
{
  "Response": "Some Error",
  "Error": "string",
  "StatusCode": 400,
  "Success": false,
  "Type": "Socket"
}
```



### PUB `/filterwheel` Operation

A websocket channel to interact with the networked filterwheel. To use this, make sure you connect the networked manual filterwheel, not the normal manual filterwheel. This extends the manual filterwheel with network capabilities, so filter changes can be completed remotely.

Interact with the filterwheel. You may need get-target-filter if the client wasn't connected, when the filter change was issued.

#### Message `<anonymous-message-23>`

* Message ID: `<anonymous-message-23>`
* Content type: [application/text](https://www.iana.org/assignments/media-types/application/text)

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | string | - | allowed (`"get-target-filter"`, `"filter-changed"`) | - | - |

> Examples of payload _(generated)_

```json
"get-target-filter"
```



### SUB `/filterwheel` Operation

* Operation ID: `onFilterEvent`

A websocket channel to interact with the networked filterwheel. To use this, make sure you connect the networked manual filterwheel, not the normal manual filterwheel. This extends the manual filterwheel with network capabilities, so filter changes can be completed remotely.

Subscribe to filter changes. When the filter changes, you will receive a message with the new filter name. If you request the target filter, but there isn't a filter change in progress, N/A will be returned. Once the filter change is completed (either in NINA or via the websocket), Change Complete will be returned.

#### Message `<anonymous-message-24>`

* Message ID: `<anonymous-message-24>`
* Content type: [application/text](https://www.iana.org/assignments/media-types/application/text)

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | string | - | allowed (`"<one of your filters>"`, `"N/A"`, `"Change Complete"`) | - | - |

> Examples of payload _(generated)_

```json
"<one of your filters>"
```



### PUB `/rotator` Operation

A websocket channel to interact with the networked rotator. To use this, make sure you connect the networked manual rotator, not the normal manual rotator. This extends the manual rotator with network capabilities, so rotations can be completed remotely.

Interact with the rotator. You may need get-target-position if the client wasn't connected, when the rotation was issued.

#### Message `<anonymous-message-25>`

* Message ID: `<anonymous-message-25>`
* Content type: [application/text](https://www.iana.org/assignments/media-types/application/text)

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | string | - | allowed (`"get-target-position"`, `"rotation-completed"`) | - | - |

> Examples of payload _(generated)_

```json
"get-target-position"
```



### SUB `/rotator` Operation

* Operation ID: `onRotationEvent`

A websocket channel to interact with the networked rotator. To use this, make sure you connect the networked manual rotator, not the normal manual rotator. This extends the manual rotator with network capabilities, so rotations can be completed remotely.

Subscribe to rotation changes. When the rotation changes, you will receive a message containing relevant information, like target position and current position. If you request the target position, but there isn't a rotation in progress, N/A will be returned. Once the rotation is completed (either in NINA or via the websocket), Rotation completed will be returned.

#### Message `<anonymous-message-26>`

* Message ID: `<anonymous-message-26>`
* Content type: [application/json](https://www.iana.org/assignments/media-types/application/json)

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | oneOf | - | - | - | **additional properties are allowed** |
| 0 (oneOf item) | object | - | - | - | **additional properties are allowed** |
| Position | number | - | - | format (`double`) | - |
| TargetPosition | number | - | - | format (`double`) | - |
| Rotation | number | - | - | format (`double`) | - |
| 1 (oneOf item) | object | - | - | - | **additional properties are allowed** |
| 1.Message | string | - | allowed (`"Rotation completed"`, `"N/A"`) | - | - |

> Examples of payload _(generated)_

```json
{
  "Position": 0.1,
  "TargetPosition": 0.1,
  "Rotation": 0.1
}
```



