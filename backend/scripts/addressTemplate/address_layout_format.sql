UPDATE
  global_property
SET
  property_value = '<org.openmrs.layout.address.AddressTemplate>
  <nameMappings>
    <entry>
      <string>countyDistrict</string>
      <string>County</string>
      <requiredInHierarchy>true</requiredInHierarchy>
    </entry>
    <entry>
      <string>stateProvince</string>
      <string>Sub County</string>
    </entry>
    <entry>
      <string>address4</string>
      <string>Ward</string>
    </entry>
  </nameMappings>
  <sizeMappings>
    <entry>
      <string>countyDistrict</string>
      <string>40</string>
    </entry>
    <entry>
      <string>stateProvince</string>
      <string>40</string>
    </entry>
    <entry>
      <string>address4</string>
      <string>40</string>
    </entry>
  </sizeMappings>
  <elementDefaults>
    <entry>
      <string>countyDistrict</string>
      <string></string>
    </entry>
  </elementDefaults>
  <requiredElements>
     <string>countyDistrict</string>
     <string>stateProvince</string>
     <string>address4</string>
  </requiredElements>
  <lineByLineFormat>
    <string>address4</string>
    <string>countyDistrict, stateProvince</string>
  </lineByLineFormat>
  <maxTokens>0</maxTokens>
</org.openmrs.layout.address.AddressTemplate>'
WHERE
  property = 'layout.address.format';

  