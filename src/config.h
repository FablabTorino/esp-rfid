struct Config {
#ifdef OFFICIALBOARD
    int relayPin[MAX_NUM_RELAYS] = {13};
#else
    int relayPin[MAX_NUM_RELAYS];
#endif
    uint8_t accessdeniedpin = 255;
    bool accessPointMode = false;
    IPAddress accessPointIp;
    IPAddress accessPointSubnetIp;
    unsigned long activateTime[MAX_NUM_RELAYS];
    unsigned long autoRestartIntervalSeconds = 0;
    unsigned long beeperInterval = 0;
    unsigned long beeperOffTime = 0;
    uint8_t beeperpin = 255;
    byte bssid[6] = {0, 0, 0, 0, 0, 0};
    char *deviceHostname = NULL;
    bool dhcpEnabled = true;
    IPAddress dnsIp;
    uint8_t doorbellpin = 255;
    uint8_t doorstatpin = 255;
    bool fallbackMode = false;
    IPAddress gatewayIp;
    char *httpPass = NULL;
    IPAddress ipAddress;
    uint8_t ledwaitingpin = 255;
    int lockType[MAX_NUM_RELAYS];
    uint8_t maxOpenDoorTime = 0;
    bool mqttEnabled = false;
    bool mqttEvents = false;	  // Sends events over MQTT disables SPIFFS file logging
    bool mqttHA = false; // Sends events over simple MQTT topics and AutoDiscovery
    char *mqttHost = NULL;
    unsigned long mqttInterval = 180; // Add to GUI & json config
    char *mqttPass = NULL;
    int mqttPort;
    char *mqttTopic = NULL;
    char *mqttUser = NULL;
    bool networkHidden = false;
    char *ntpServer = NULL;
	int ntpInterval = 0;
    int numRelays = 1;
    uint8_t openlockpin = 255;
    bool pinCodeRequested;
    bool present = false;
    int readertype;
    int relayType[MAX_NUM_RELAYS];
    IPAddress subnetIp;
    const char *ssid;
    int timeZone = 0;
    const char *wifiApIp = NULL;
    const char *wifiApSubnet = NULL;
	uint8_t wifipin = 255;
    const char *wifiPassword = NULL;
    unsigned long wifiTimeout = 0;
};
