# Team Standup

Chris: Working on schedule with client.
Ill be relying on you guys for updates to show progress.
We do need to show them some sort of status.

Mason: I looked at mappings yesterday to see how things might be different from XML.
TODAY: I am going to work w Chris Rigoni.

Jim: Yesterday we got some progress
My goal is to get SOAP UI working.

Bharghav: re-watch his part. I am looking into Jim's personal branch.

## SCONDARY CALL
Jim is using the doc to structure his new directory.
`require` just loads a file.
It makes the items available to use.

`BPXClient` can receive everything that we need to consume.
This can take information into the module at run time.
`bpx_client.rb`
In here, there is a `bpxClient::Properties` (in `properties`)

under `client_props.yml` items are being passed into SAVON
This file will tell how every service call.

`properties.rb` will take items out of .yml file, and run methods on it.

`spec_helper.rb`- we have the b

each `service` file will just bootstrap and pull in all items in that level of the directory.
These are passed, and become a part of the **OBJECTS** that pull them in.

`require` specifies the load order.

With RSPEC, you can see how things are loaded.

`spec/business_application_header_spec.rb`

`soap_client` creates our SAVON object

`base_service` will do the service call.
SAVON requires message name, and message.

IDEAS: Jim does consumer maintenance.
It doesnt have certs or anything to do REAL TESTS on their server.
He is running against SOAP.ui to test.

Start my part with building request messages


## Jim's Article:
[Here is the link](https://blog.arkency.com/2016/07/testing-soap-api-adapters/)

**SAVON** is used to communicate with the API

The most important part is where to find the `wsdl` - which descrives the netword services as a set of endpoint operating on messages:
```
Savon.client(
  wsdl: static_configuration.goods_shipped_url,
)
```
This is used to describe messages/types. in this case, it sends:
```
<s:element name="GoodsShipped">
  <s:complexType>
    <s:sequence>
      <s:element minOccurs="1" maxOccurs="1" name="companyID" type="s:int" />
      <s:element minOccurs="1" maxOccurs="1" name="retailerID" type="s:int" />
      <s:element minOccurs="0" maxOccurs="1" name="orderID" type="s:string" />
      <s:element minOccurs="0" maxOccurs="1" name="signature" type="s:string" />
    </s:sequence>
  </s:complexType>
</s:element>
```
And it willl RECEIVE this:
```
<s:complexType name="GoodsShippedResponse">
  <s:sequence>
    <s:element minOccurs="1" maxOccurs="1" name="Status" type="s1:GoodsShippedStatus" />
    <s:element minOccurs="0" maxOccurs="1" name="TransactionID" type="s:string" />
    <s:element minOccurs="1" maxOccurs="1" name="ContractID" type="s:int" />
    <s:element minOccurs="1" maxOccurs="1" name="LoanAmount" type="s:double" />
  </s:sequence>
</s:complexType>
```

What is a `GoodsShippedStatus`,
```
<s:simpleType name="GoodsShippedStatus">
  <s:restriction base="s:string">
    <s:enumeration value="Ok" />
    <s:enumeration value="WrongState" />
    <s:enumeration value="Error" />
  </s:restriction>
</s:simpleType>
```

# Mocks

From [this article](https://www.rubyguides.com/2018/10/rspec-mocks/)

**Mocks** replace the original object, so the real moethods wont be called.

MOCKS expect methods to be called
STUBS are a method with a canned response- doesnt care about behavior.

## Verified Doubles

They can act as a STUB(allow) or a MOCK(expect) and will check if the method exists.
If the method doesnt exist, it will through an error.

## When to use MOCKS, STUBS, METHODS?

1. If method returns value, you dont need mock. Just check for the return value
2. If the method works with EXTERNAL OBJECTS, **MOCK**
3. If the method is **REQUESTING** data, use a STUB.

So, use STUBS until actual API calls are being used.

## SAVON TESTING
from [this articel](https://www.savonrb.com/version2/testing.html)

So SAVON is a SOAP CLIENT for Ruby, that can do SOAP calls.
SAVON can be tested with RSPEC

So, PRACTICE SOAP CALLS with SAVON against SOAPUI.

On INBOUND HEADER (see )


## CAll with MASON

the word *multiplicity* on the mapping doc, tells required fileds.
1 = required

This is also found in the Bill Pay Exchange Tech Spec as a column next tothe fields (the one that is 217 pages)


Also on this doc, page 14:
https://drive.google.com/drive/folders/1O8L-rvv4NGO4ZFRRLor-qrHppJSUPnuc

Also, from PRY you can do more object based work.
Look into binding pry.


## Todos
- [ ] Integrate xml for header, and validator against the xsd (schema). Pull CONSTANTS from .yml file while doing this
- [ ] add a test for the BODY to validate
- [ ] How to load, require items in Ruby
- [ ] Do app header response. So we SEND the app header, and get a header response.
- [ ] difference between MODULE and CLASS
- [ ] Start **request to link** service call
- [ ] re-read articles mason sent https://www.rubyguides.com/2018/10/rspec-mocks/
https://www.rubydoc.info/github/savonrb/savon/Savon/SpecHelper
https://www.savonrb.com/version2/testing.html
https://github.com/savonrb/savon/tree/master/spec/integration

1. Validate header REQUEST
2. VALIDATE HEADER RESPONSE
3. Run response.rb.