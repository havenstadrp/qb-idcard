QBCore.Functions.CreateUseableItem("id_card", function(source,item)
    local nui = 'idcard'
    TriggerClientEvent('qb-idcard:client:open', source, item, nui)
end)

QBCore.Functions.CreateUseableItem("driver_license", function(source,item)
    local nui = 'driverlicense'
    TriggerClientEvent('qb-idcard:client:open', source, item, nui)
end)

QBCore.Functions.CreateCallback('qb-idcard:server:openInformation', function(source, cb, item)
    local inf = {
        ['name'] = item["info"]["lastname"] .. ' ' .. item["info"]["firstname"],
        ['lastname'] = item["info"]["lastname"],
        ['firstname'] = item["info"]["firstname"],
        ['gender'] = item["info"]["gender"],
        ['dob'] = item["info"]["birthdate"],
        ['nationality'] = item["info"]["nationality"],
        ['type'] = item["info"]["type"],
        ['fingerprint'] = item["info"]["fingerprint"],
        -- driver
        ['lastname'] = '1. ' .. item["info"]["lastname"],
        ['firstname'] = '2. ' .. item["info"]["firstname"],
        ['driverdob'] = '3. ' .. item["info"]["birthdate"] .. ' Havenstad', -- TODO change city naar hetgene ze invullen
        ['drivertypemotor'] = '4. 🏍️ ' .. item["info"]["type"],
        ['drivertypecar'] = '5. 🚗 ' .. item["info"]["type"],
        ['drivertypetruck'] = '6. 🚚 ',
    }
    cb(inf)
end)
