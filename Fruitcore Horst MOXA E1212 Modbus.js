/* Fruitcore Horst MOXA E1212 Modbus.js */
/* Author:  Holzmade Date:    14MAR2023 */
configuration();
{
    config("robot.horstproto", "Horst1400S2Fast");
    config("tool", "No Tool");
    config("world", "EMPTY_WORLD");
    config("scripttype", "visual");
    config("tcp.weight", "12.0");
    config("version", "2022.04_hotfix6");
    config("io.config.file", "Grafisch mit textuellen Funktionen.io");
    config("io.config.checksum", "4e9f64de");
}

variables();
{
    variable("MoxaEingangLesen", "numeric", "local");
    var MoxaEingangLesen = 0;
}


function MoxaAusgang_0_AN()
{
	modbusClient = modbusConnect("192.168.127.254", 502);
	try
	{
		modbusWriteCoil(modbusClient, 0000, true);
		showHint("Ouput 0: " + modbusReadCoil(modbusClient, 0000));
	}
	catch (e)
	{
		show_info("Error while writing coil 0");
	}
	finally
	{
		modbusClient.closeConnection();
	}
}

function MoxaAusgang_0_AUS()
{
	modbusClient = modbusConnect("192.168.127.254", 502);
	try
	{
		modbusWriteCoil(modbusClient, 0000, false);
		showHint("Ouput 0: " + modbusReadCoil(modbusClient, 0000));
	}
	catch (e)
	{
		show_info("Error while writing coil 0");
	}
	finally
	{
		modbusClient.closeConnection();
	}
}

function MoxaAusgang_1_AN()
{
	modbusClient = modbusConnect("192.168.127.254", 502);
	try
	{
		modbusWriteCoil(modbusClient, 0001, true);
		showHint("Ouput 1: " + modbusReadCoil(modbusClient, 0001));
	}
	catch (e)
	{
		show_info("Error while writing coil 1");
	}
	finally
	{
		modbusClient.closeConnection();
	}
}

function MoxaAusgang_1_AUS()
{
	modbusClient = modbusConnect("192.168.127.254", 502);
	try
	{
		modbusWriteCoil(modbusClient, 0001, false);
		showHint("Ouput 1: " + modbusReadCoil(modbusClient, 0001));
	}
	catch (e)
	{
		show_info("Error while writing coil 1");
	}
	finally
	{
		modbusClient.closeConnection();
	}
}

function MoxaAusgang_2_AN()
{
	modbusClient = modbusConnect("192.168.127.254", 502);
	try
	{
		modbusWriteCoil(modbusClient, 0002, true);
		showHint("Ouput 2: " + modbusReadCoil(modbusClient, 0002));
	}
	catch (e)
	{
		show_info("Error while writing coil 2");
	}
	finally
	{
		modbusClient.closeConnection();
	}
}

function MoxaAusgang_2_AUS()
{
	modbusClient = modbusConnect("192.168.127.254", 502);
	try
	{
		modbusWriteCoil(modbusClient, 0002, false);
		showHint("Ouput 2: " + modbusReadCoil(modbusClient, 0002));
	}
	catch (e)
	{
		show_info("Error while writing coil 2");
	}
	finally
	{
		modbusClient.closeConnection();
	}
}

function MoxaAusgang_3_AN()
{
	modbusClient = modbusConnect("192.168.127.254", 502);
	try
	{
		modbusWriteCoil(modbusClient, 0003, true);
		showHint("Ouput 3: " + modbusReadCoil(modbusClient, 0003));
	}
	catch (e)
	{
		show_info("Error while writing coil 3");
	}
	finally
	{
		modbusClient.closeConnection();
	}
}

function MoxaAusgang_3_AUS()
{
	modbusClient = modbusConnect("192.168.127.254", 502);
	try
	{
		modbusWriteCoil(modbusClient, 0003, false);
		showHint("Ouput 3: " + modbusReadCoil(modbusClient, 0003));
	}
	catch (e)
	{
		show_info("Error while writing coil 3");
	}
	finally
	{
		modbusClient.closeConnection();
	}
}

function MoxaAusgang_4_AN()
{
	modbusClient = modbusConnect("192.168.127.254", 502);
	try
	{
		modbusWriteCoil(modbusClient, 0004, true);
		showHint("Ouput 4: " + modbusReadCoil(modbusClient, 0004));
	}
	catch (e)
	{
		show_info("Error while writing coil 4");
	}
	finally
	{
		modbusClient.closeConnection();
	}
}

function MoxaAusgang_4_AUS()
{
	modbusClient = modbusConnect("192.168.127.254", 502);
	try
	{
		modbusWriteCoil(modbusClient, 0004, false);
		showHint("Ouput 4: " + modbusReadCoil(modbusClient, 0004));
	}
	catch (e)
	{
		show_info("Error while writing coil 4");
	}
	finally
	{
		modbusClient.closeConnection();
	}
}

function MoxaAusgang_5_AN()
{
	modbusClient = modbusConnect("192.168.127.254", 502);
	try
	{
		modbusWriteCoil(modbusClient, 0005, true);
		showHint("Ouput 5: " + modbusReadCoil(modbusClient, 0005));
	}
	catch (e)
	{
		show_info("Error while writing coil 5");
	}
	finally
	{
		modbusClient.closeConnection();
	}
}

function MoxaAusgang_5_AUS()
{
	modbusClient = modbusConnect("192.168.127.254", 502);
	try
	{
		modbusWriteCoil(modbusClient, 0005, false);
		showHint("Ouput 5: " + modbusReadCoil(modbusClient, 0005));
	}
	catch (e)
	{
		show_info("Error while writing coil 5");
	}
	finally
	{
		modbusClient.closeConnection();
	}
}

function MoxaAusgang_6_AN()
{
	modbusClient = modbusConnect("192.168.127.254", 502);
	try
	{
		modbusWriteCoil(modbusClient, 0006, true);
		showHint("Ouput 6: " + modbusReadCoil(modbusClient, 0006));
	}
	catch (e)
	{
		show_info("Error while writing coil 6");
	}
	finally
	{
		modbusClient.closeConnection();
	}
}

function MoxaAusgang_6_AUS()
{
	modbusClient = modbusConnect("192.168.127.254", 502);
	try
	{
		modbusWriteCoil(modbusClient, 0006, false);
		showHint("Ouput 6: " + modbusReadCoil(modbusClient, 0006));
	}
	catch (e)
	{
		show_info("Error while writing coil 6");
	}
	finally
	{
		modbusClient.closeConnection();
	}
}

function MoxaAusgang_7_AN()
{
	modbusClient = modbusConnect("192.168.127.254", 502);
	try
	{
		modbusWriteCoil(modbusClient, 0007, true);
		showHint("Ouput 7: " + modbusReadCoil(modbusClient, 0007));
	}
	catch (e)
	{
		show_info("Error while writing coil 7");
	}
	finally
	{
		modbusClient.closeConnection();
	}
}

function MoxaAusgang_7_AUS()
{
	modbusClient = modbusConnect("192.168.127.254", 502);
	try
	{
		modbusWriteCoil(modbusClient, 0007, false);
		showHint("Ouput 7: " + modbusReadCoil(modbusClient, 0007));
	}
	catch (e)
	{
		show_info("Error while writing coil 7");
	}
	finally
	{
		modbusClient.closeConnection();
	}
}





function MoxaEingang_0()
{
	modbusClient = modbusConnect("192.168.127.254", 502);
	try
	{
		showHint("Input 0: " + modbusReadInputDiscrete(modbusClient, 0000));

	}
	catch (e)
	{
		show_info("Error while read input 0 Hint");
	}
	try
	{
		if ( modbusReadInputDiscrete(modbusClient, 0000) == true ){
			MoxaEingangLesen = 1.0;
		}
		if ( modbusReadInputDiscrete(modbusClient, 0000) == false ){
			MoxaEingangLesen = 0.0;
		}
	}
	catch (e)
	{
		show_info("Error while read input 0 Variable");
	}
	finally
	{
		modbusClient.closeConnection();
	}
}

function MoxaEingang_1()
{
	modbusClient = modbusConnect("192.168.127.254", 502);
	try
	{
		showHint("Input 1: " + modbusReadInputDiscrete(modbusClient, 0001));

	}
	catch (e)
	{
		show_info("Error while read input 1 Hint");
	}
	try
	{
		if ( modbusReadInputDiscrete(modbusClient, 0001) == true ){
			MoxaEingangLesen = 1.0;
		}
		if ( modbusReadInputDiscrete(modbusClient, 0001) == false ){
			MoxaEingangLesen = 0.0;
		}
	}
	catch (e)
	{
		show_info("Error while read input 1 Variable");
	}
	finally
	{
		modbusClient.closeConnection();
	}
}

function MoxaEingang_2()
{
	modbusClient = modbusConnect("192.168.127.254", 502);
	try
	{
		showHint("Input 2: " + modbusReadInputDiscrete(modbusClient, 0002));

	}
	catch (e)
	{
		show_info("Error while read input 2 Hint");
	}
	try
	{
		if ( modbusReadInputDiscrete(modbusClient, 0002) == true ){
			MoxaEingangLesen = 1.0;
		}
		if ( modbusReadInputDiscrete(modbusClient, 0002) == false ){
			MoxaEingangLesen = 0.0;
		}
	}
	catch (e)
	{
		show_info("Error while read input 2 Variable");
	}
	finally
	{
		modbusClient.closeConnection();
	}
}

function MoxaEingang_3()
{
	modbusClient = modbusConnect("192.168.127.254", 502);
	try
	{
		showHint("Input 3: " + modbusReadInputDiscrete(modbusClient, 0003));

	}
	catch (e)
	{
		show_info("Error while read input 3 Hint");
	}
	try
	{
		if ( modbusReadInputDiscrete(modbusClient, 0003) == true ){
			MoxaEingangLesen = 1.0;
		}
		if ( modbusReadInputDiscrete(modbusClient, 0003) == false ){
			MoxaEingangLesen = 0.0;
		}
	}
	catch (e)
	{
		show_info("Error while read input 3 Variable");
	}
	finally
	{
		modbusClient.closeConnection();
	}
}

function MoxaEingang_4()
{
	modbusClient = modbusConnect("192.168.127.254", 502);
	try
	{
		showHint("Input 4: " + modbusReadInputDiscrete(modbusClient, 0004));

	}
	catch (e)
	{
		show_info("Error while read input 4 Hint");
	}
	try
	{
		if ( modbusReadInputDiscrete(modbusClient, 0004) == true ){
			MoxaEingangLesen = 1.0;
		}
		if ( modbusReadInputDiscrete(modbusClient, 0004) == false ){
			MoxaEingangLesen = 0.0;
		}
	}
	catch (e)
	{
		show_info("Error while read input 4 Variable");
	}
	finally
	{
		modbusClient.closeConnection();
	}
}

function MoxaEingang_5()
{
	modbusClient = modbusConnect("192.168.127.254", 502);
	try
	{
		showHint("Input 5: " + modbusReadInputDiscrete(modbusClient, 0005));

	}
	catch (e)
	{
		show_info("Error while read input 5 Hint");
	}
	try
	{
		if ( modbusReadInputDiscrete(modbusClient, 0005) == true ){
			MoxaEingangLesen = 1.0;
		}
		if ( modbusReadInputDiscrete(modbusClient, 0005) == false ){
			MoxaEingangLesen = 0.0;
		}
	}
	catch (e)
	{
		show_info("Error while read input 5 Variable");
	}
	finally
	{
		modbusClient.closeConnection();
	}
}

function MoxaEingang_6()
{
	modbusClient = modbusConnect("192.168.127.254", 502);
	try
	{
		showHint("Input 6: " + modbusReadInputDiscrete(modbusClient, 0006));

	}
	catch (e)
	{
		show_info("Error while read input 6 Hint");
	}
	try
	{
		if ( modbusReadInputDiscrete(modbusClient, 0006) == true ){
			MoxaEingangLesen = 1.0;
		}
		if ( modbusReadInputDiscrete(modbusClient, 0006) == false ){
			MoxaEingangLesen = 0.0;
		}
	}
	catch (e)
	{
		show_info("Error while read input 6 Variable");
	}
	finally
	{
		modbusClient.closeConnection();
	}
}

function MoxaEingang_7()
{
	modbusClient = modbusConnect("192.168.127.254", 502);
	try
	{
		showHint("Input 7: " + modbusReadInputDiscrete(modbusClient, 0007));

	}
	catch (e)
	{
		show_info("Error while read input 7 Hint");
	}
	try
	{
		if ( modbusReadInputDiscrete(modbusClient, 0007) == true ){
			MoxaEingangLesen = 1.0;
		}
		if ( modbusReadInputDiscrete(modbusClient, 0007) == false ){
			MoxaEingangLesen = 0.0;
		}
	}
	catch (e)
	{
		show_info("Error while read input 7 Variable");
	}
	finally
	{
		modbusClient.closeConnection();
	}
}