# Installation

## Requirements

* A USB drive (8 GB minimum)
* Bootable USB creator
* A backup of all the files that you want to keep, either in the cloud or on an external drive.
* [ReflexOS 10 Setup Files](https://github.com/Hamziee/ReflexOS/releases)
* x64/64-bit CPU (x86 or 32-bit is not supported)

:::caution ReflexOS is not pre-activated
ReflexOS is **not** a pre-activated version of Windows. If you want to run ReflexOS legally, you need to have your own Windows license. Before you buy a Windows (Pro OR Home) license, make sure that the seller is trusted and that the key is legitimate, no matter where you buy it.
:::

:::tip Download ethernet drivers
Some network adapters do not have drivers that come with Windows. This means that if you are using Ethernet, you might not be able to connect to the internet after installing. We recommend you to download the drivers for your ethernet adapter ahead of time, and put them on your bootable Windows USB.
:::

:::tip
For Windows 10, we recommend using LTSC edition. This is a long term support version of Windows 10 and does not contain those bloatware feature updates.
:::

## Video Tutorial

<iframe width="930" height="523" src="https://www.youtube.com/embed/GoO36Tj5TGE" title="ReflexOS — Installation Guide &amp; Overview (Performant Windows!)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Download an ISO

Depending on the bootable USB creator you want to use, you may need to get your own Windows ISO because the bootable USB creator may not have a built-in download feature.

The following bootable USB creators that we have written about need an ISO file:

### Ventoy
### Rufus

* Windows 10 LTSC Direct Download (LTSC Edition) Recommended!

    1. Download the [Windows Media Creation Tool](https://go.microsoft.com/fwlink/?LinkId=691209) and open it.
    2. Click the ``Accept`` button to agree to the Microsoft license terms.
    3. Tick ``Create installation media (USB flash drive, DVD, or ISO file) for another PC``, click ``Next``, and choose:
        * Language: Desired language
        * Edition: Windows 10 LTSC
        * Architecture: 64-bit (x64)
    4. Choose ``ISO file`` option and choose the download location.
    5. After the ISO completed downloading, click ``Finish`` to end the installation.

* Windows Media Creation Tool (Default Edition)

    1. Download the [Windows Media Creation Tool](https://go.microsoft.com/fwlink/?LinkId=691209) and open it.
    2. Click the ``Accept`` button to agree to the Microsoft license terms.
    3. Tick ``Create installation media (USB flash drive, DVD, or ISO file) for another PC``, click ``Next``, and choose:
        * Language: Desired language
        * Edition: Windows 10
        * Architecture: 64-bit (x64)
    4. Choose ``ISO file`` option and choose the download location.
    5. After the ISO completed downloading, click ``Finish`` to end the installation.

## Identify BIOS mode

To identify your BIOS Mode you can either check your device's manual, or look it up in your BIOS or check it in Windows.
To check it in Windows, you can use PowerShell, and copy and pasting the following into PowerShell (make sure you run PowerShell as administrator):

```PowerShell
$BootMode = If((bcdedit | Select-String "path.*efi") -eq $null){"Legacy"}else{"UEFI"}; Write-Host "Computer is running in $BootMode boot mode."
```

You will either get ``UEFI`` or ``Legacy``. ``UEFI`` is a newer BIOS mode that is recommended for new machines, and it supports the ``GPT`` partition style. ``Legacy`` is an older BIOS mode, and it supports the ``MBR`` partition style.

:::info 
It is not recommended to run UEFI with MBR or BIOS with GPT as it may cause compatibility and stability issues.
If you are using a mixed combination, you may want to [convert your partition style](https://learn.microsoft.com/en-us/windows-server/storage/disk-management/change-an-mbr-disk-into-a-gpt-disk) during the installation.
:::

## Preparing your USB

:::danger 
"Your USB will be wiped"
Make sure to back up any files on the USB drive that you may want to keep, because the bootable USB creator will delete them. You cannot get around this, copy any files you want to keep to an external drive or the cloud.
:::

:::note Ventoy
1. Download and unzip [Ventoy](https://github.com/ventoy/Ventoy).
2. Plug in your USB Stick and open ``Ventoy2Disk.exe``.
2. Disable ``Secure Boot Support`` in the ``Option`` menu, if you have it disabled in your BIOS and you use ``UEFI``.
3. Then in the same tab, configure ``Partition Style`` depending on the BIOS Mode:
    - If you are using ``UEFI``, select ``GPT``.
    - If you are using ``Legacy``, select ``MBR``.
5. Click ``Install`` and then click OK in the two warnings.
6. Extract ``ReflexOS [version].zip``, to the root directory of your USB.
7. Move the iso onto your USB Stick.
:::

:::note Rufus
1. Download and open [Rufus](https://github.com/pbatard/rufus).
2. Plug in your USB Stick.
3. Click the ``SELECT`` button and pick your ISO file.
4. Configure ``Partition scheme``
    - If you are using ``UEFI``, select ``GPT``.
    - If you are using ``Legacy``, select``MBR``.
4. Click ``START`` and in the ``Windows User Experience`` wizard, and then click ``OK``.
5. Press ``OK`` again and your USB will be erased and turned into a bootable USB.
6. Extract ``ReflexOS 10 [version].zip``, to the root directory of your USB.
:::

## Booting into your USB

1. Disconnect the internet cable from your device and do not connect to the internet during the installation.
    - This stops the Windows OOBE from making unauthorized changes that could later hurt the ReflexOS installation process.
2. Boot into your USB using Boot Menu/BIOS.
    - If you are using Ventoy, choose the ISO file that you moved to the USB Stick in the program menu.
4. Proceed with the Windows installation as usual.
    - If asked, choose your desired edition (Professional is recommended).
5. Finish installing Windows in the OOBE, and follow the video below:

    <iframe src="https://streamable.com/e/21wdvv?loop=0" width="560" height="420" frameborder="0" allowfullscreen></iframe>
    
    If the video above does not work, use the video provided here:
    
    - [Windows 10+ OOBE](https://raw.githubusercontent.com/amitxv/PC-Tuning/main/media/oobe-windows10+-example.mp4)

## Install ReflexOS

1. Place the ``ReflexOS 10`` folder from the USB Stick to the C:\ Drive.
2. Run ``Disable Drivers Installation in Windows Update.reg`` to prevent Windows from automatically installing drivers via Windows Update, and restart your computer.
3. soon...

After a few reboots, your system will be optimized and have less junk on it, thanks to ReflexOS, you will enjoy more privacy, and better performance.

### Troubleshooting

:::tip
If you are using Wi-Fi and cannot connect to the internet, temporarily plug an ethernet cable into your computer to download your drivers. You can also download the right Wi-Fi or ethernet drivers with an external hard drive or USB using something else.
:::

:::info
If you face any trouble while installing, you can ask for help on our Discord server.