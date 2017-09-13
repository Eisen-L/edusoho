<?php

namespace AppBundle\Extension;

use Pimple\Container;
use Pimple\ServiceProviderInterface;

class PaymentExtension extends Extension implements ServiceProviderInterface
{
    /**
     * {@inheritdoc}
     */
    public function register(Container $container)
    {
    }

    public function getPayments()
    {
        return array(
            'wechat' => array(
                'notify' => 'AppBundle:Cashier/Wechat:notify',
            ),

            'alipay' => array(
                'notify' => 'AppBundle:Cashier/Alipay:notify',
                'returnForApp' => 'AppBundle:Cashier/Alipay:returnForApp',
            ),
        );
    }
}
